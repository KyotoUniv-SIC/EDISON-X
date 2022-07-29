/* eslint-disable camelcase */
import { cost_setting } from '.';
import { discount_price } from '../discount-prices';
import { monthly_payment } from '../monthly-payments';
import { monthly_settlement } from '../monthly-settlements';
import { primary_ask } from '../primary-asks';
import { student_account } from '../student-accounts';
import { CostSetting, DiscountPrice } from '@local/common';

cost_setting.onCreateHandler.push(async (snapshot, context) => {
  const data = snapshot.data()! as CostSetting;
  const systemCost = parseInt(data.system_cost_ujpy);
  const electricityCost = parseInt(data.electricity_cost_ujpy);
  const monthlySettlement = await monthly_settlement.listLatest();
  const reward = parseInt(monthlySettlement[0].reward_ujpy);
  const income = parseInt(monthlySettlement[0].system_income_ujpy);
  const purchase = parseInt(monthlySettlement[0].purchase_utoken);
  const sale = parseInt(monthlySettlement[0].sale_utoken);
  const primaryAsks = await primary_ask.listLastMonth();

  const primaryPrice = primaryAsks.length ? parseInt(primaryAsks[0].price_ujpy) : 27;

  // 0で割るのを避ける
  let price: number;
  if (purchase + sale) {
    price =
      (systemCost + electricityCost + reward - income + ((purchase - sale) * parseInt(primaryAsks[0].price_ujpy)) / 1000000) /
      (((purchase + sale) * primaryPrice) / 1000000);
  } else {
    price = 0;
  }
  console.log('Discount price', price);

  const discountPrice = new DiscountPrice({
    price_ujpy: Math.floor(price).toString(),
    amount_purchase_utoken: purchase.toString(),
    amount_sale_utoken: sale.toString(),
  });
  await discount_price.create(discountPrice);

  const students = await student_account.list();
  for (const student of students) {
    const monthlyPayments = await monthly_payment.listLatest(student.id);
    if (monthlyPayments.length) {
      const monthlyPayment = monthlyPayments[0];
      const tokens = parseInt(monthlyPayment.amount_utoken);
      const discount = parseInt(discountPrice.price_ujpy);
      let adjustPayment: number;
      if (tokens >= 0) {
        adjustPayment = -(primaryPrice - discount * tokens) / 1000000;
      } else {
        adjustPayment = -(primaryPrice + discount * tokens) / 1000000;
      }
      monthlyPayment.amount_adjust_ujpy = adjustPayment.toString();
      monthlyPayment.amount_ujpy = (parseInt(monthlyPayment.amount_ujpy) + adjustPayment).toString();
      await monthly_payment.update(monthlyPayment);
    }
  }
});

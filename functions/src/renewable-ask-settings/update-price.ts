/* eslint-disable camelcase */
import { renewable_ask_setting } from '.';

// import { RenewableAskSetting } from '@local/common';

renewable_ask_setting.onCreateHandler.push(async (snapshot, context) => {
  // const data = snapshot.data()! as RenewableAskSetting;
  // const settings = await renewable_ask_setting.listDesc();
  // if (settings.length > 1) {
  //   const price = settings[1].price_ujpy;
  //   await renewable_ask_setting.update({ id: data.id, price_ujpy: price });
  //   console.log('New renewable-ask-setting created.');
  // }
});

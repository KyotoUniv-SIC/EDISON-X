import { AccountComponent } from './account/account.component';
import { AccountsComponent } from './accounts.component';
import { AutoOrderComponent } from './auto-order/auto-order.component';
import { CreateComponent } from './create/create.component';
import { EmailComponent } from './email/email.component';
import { EnterComponent } from './enter/enter.component';
import { PaymentComponent } from './payments/payment/payment.component';
import { PaymentsComponent } from './payments/payments.component';
import { ResetComponent } from './reset/reset.component';
import { RoomComponent } from './room/room.component';
import { XrplComponent } from './xrpl/xrpl.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AccountsComponent },
  { path: 'create', component: CreateComponent },
  { path: 'enter', component: EnterComponent },
  { path: 'account', component: AccountComponent },
  { path: 'room', component: RoomComponent },
  { path: 'email', component: EmailComponent },
  { path: 'xrpl', component: XrplComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'payments/:payment_id', component: PaymentComponent },
  { path: 'reset', component: ResetComponent },
  { path: 'auto-order', component: AutoOrderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsRoutingModule {}

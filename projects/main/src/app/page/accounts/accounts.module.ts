import { AccountModule } from '../../view/accounts/account/account.module';
import { AccountsModule } from '../../view/accounts/accounts.module';
import { CreateModule } from '../../view/accounts/create/create.module';
import { EmailModule } from '../../view/accounts/email/email.module';
import { EnterModule } from '../../view/accounts/enter/enter.module';
import { PaymentModule } from '../../view/accounts/payments/payment/payment.module';
import { PaymentsModule } from '../../view/accounts/payments/payments.module';
import { ResetModule } from '../../view/accounts/reset/reset.module';
import { RoomModule } from '../../view/accounts/room/room.module';
import { XrplModule } from '../../view/accounts/xrpl/xrpl.module';
import { AccountComponent } from './account/account.component';
import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';
import { CreateComponent } from './create/create.component';
import { EmailComponent } from './email/email.component';
import { EnterComponent } from './enter/enter.component';
import { PaymentComponent } from './payments/payment/payment.component';
import { PaymentsComponent } from './payments/payments.component';
import { ResetComponent } from './reset/reset.component';
import { RoomComponent } from './room/room.component';
import { XrplComponent } from './xrpl/xrpl.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'projects/shared/src/common';
import { AutoOrderComponent } from './auto-order/auto-order.component';

@NgModule({
  declarations: [
    AccountComponent,
    AccountsComponent,
    CreateComponent,
    EnterComponent,
    RoomComponent,
    EmailComponent,
    XrplComponent,
    PaymentsComponent,
    PaymentComponent,
    ResetComponent,
    AutoOrderComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AccountsRoutingModule,
    AccountsModule,
    AccountModule,
    CreateModule,
    EnterModule,
    RoomModule,
    EmailModule,
    XrplModule,
    PaymentsModule,
    PaymentModule,
    ResetModule,
  ],
})
export class AppAccountsModule {}

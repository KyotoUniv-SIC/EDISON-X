import {
  SetCostOnSubmitEvent,
  SetNormalOnSubmitEvent,
  SetPrimaryOnSubmitEvent,
  SetRenewableOnSubmitEvent,
  SetRewardOnSubmitEvent,
} from '../../../view/admin/tokens/tokens.component';
import { Component, OnInit } from '@angular/core';
import { CostSetting, NormalAskSetting, PrimaryAskSetting, RenewableAskSetting, RenewableRewardSetting } from '@local/common';
import { CostSettingApplicationService } from 'projects/shared/src/lib/services/cost-settings/cost-setting.application.service';
import { NormalAskSettingApplicationService } from 'projects/shared/src/lib/services/normal-ask-settings/normal-ask-setting.application.service';
import { PrimaryAskSettingApplicationService } from 'projects/shared/src/lib/services/primary-ask-settings/primary-ask-setting.application.service';
import { RenewableAskSettingApplicationService } from 'projects/shared/src/lib/services/renewable-ask-settings/renewable-ask-setting.application.service';
import { RenewableRewardSettingApplicationService } from 'projects/shared/src/lib/services/renewable-reward-settings/renewable-reward-setting.application.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tokens',
  templateUrl: './tokens.component.html',
  styleUrls: ['./tokens.component.css'],
})
export class TokensComponent implements OnInit {
  primarySetting$: Observable<PrimaryAskSetting> | undefined;
  normalSetting$: Observable<NormalAskSetting> | undefined;
  renewableSetting$: Observable<RenewableAskSetting> | undefined;
  costSetting$: Observable<CostSetting> | undefined;
  renewableRewardSetting$: Observable<RenewableRewardSetting>;

  constructor(
    private readonly primaryAskSettingApp: PrimaryAskSettingApplicationService,
    private readonly normalAskSettingApp: NormalAskSettingApplicationService,
    private readonly renewableAskSettingApp: RenewableAskSettingApplicationService,
    private readonly costSettingApp: CostSettingApplicationService,
    private readonly renewableRewardSettingApp: RenewableRewardSettingApplicationService,
  ) {
    this.primarySetting$ = this.primaryAskSettingApp.getLatest$();
    this.normalSetting$ = this.normalAskSettingApp.getLatest$();
    this.renewableSetting$ = this.renewableAskSettingApp.getLatest$();
    this.costSetting$ = this.costSettingApp.getLatest$();
    this.renewableRewardSetting$ = this.renewableRewardSettingApp.getLatest$();
  }

  ngOnInit(): void {}

  async onSubmitPrimary($event: SetPrimaryOnSubmitEvent) {
    await this.primaryAskSettingApp.create(
      new NormalAskSetting({
        price_ujpy: $event.ujpyPrice,
        ratio_percentage: $event.uupxRatio,
      }),
    );
  }

  async onSubmitNormal($event: SetNormalOnSubmitEvent) {
    await this.normalAskSettingApp.create(
      new NormalAskSetting({
        price_ujpy: $event.ujpyPrice,
        ratio_percentage: $event.uupxRatio,
        enable: $event.enable,
      }),
    );
  }

  async onSubmitRenewable($event: SetRenewableOnSubmitEvent) {
    await this.renewableAskSettingApp.create(new RenewableAskSetting({ price_ujpy: $event.ujpyPrice, amount_uspx: $event.uspxAmount }));
  }

  async onSubmitCost($event: SetCostOnSubmitEvent) {
    await this.costSettingApp.create(
      new CostSetting({ system_cost_ujpy: $event.systemCost, electricity_cost_ujpy: $event.electricityCost }),
    );
  }

  async onSubmitReward($event: SetRewardOnSubmitEvent) {
    await this.renewableRewardSettingApp.create(
      new RenewableRewardSetting({
        first_price_ujpy: $event.firstReward,
        second_price_ujpy: $event.secondReward,
        third_price_ujpy: $event.thirdReward,
      }),
    );
  }
}

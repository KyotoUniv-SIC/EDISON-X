import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PrimaryAskSettingInfrastructureService } from './primary-ask-setting.infrastructure.service';
import { PrimaryAskSetting } from '@local/common';

export interface IPrimaryAskSettingInfrastructureService {
  get(id: string): Promise<PrimaryAskSetting | undefined>;
  get$(id: string): Observable<PrimaryAskSetting | undefined>;
  list(): Promise<PrimaryAskSetting[]>;
  list$(): Observable<PrimaryAskSetting[]>;
  listGroup(): Promise<PrimaryAskSetting[]>;
  listGroup$(): Observable<PrimaryAskSetting[]>;
  create(data: PrimaryAskSetting): Promise<void>;
}

@Injectable({
  providedIn: 'root',
})
export class PrimaryAskSettingService {
  private iPrimaryAskSettingInfrastructure: IPrimaryAskSettingInfrastructureService;

  constructor(readonly primaryAskSettingInfrastructure: PrimaryAskSettingInfrastructureService) {
    this.iPrimaryAskSettingInfrastructure = primaryAskSettingInfrastructure;
  }

  get(id: string) {
    return this.iPrimaryAskSettingInfrastructure.get(id);
  }

  get$(id: string) {
    return this.iPrimaryAskSettingInfrastructure.get$(id);
  }

  list() {
    return this.iPrimaryAskSettingInfrastructure.list();
  }
  
  list$() {
    return this.iPrimaryAskSettingInfrastructure.list$();
  }
  
  listGroup() {
    return this.iPrimaryAskSettingInfrastructure.listGroup();
  }
  
  listGroup$() {
    return this.iPrimaryAskSettingInfrastructure.listGroup$();
  }

  create(data: PrimaryAskSetting) {
    return this.iPrimaryAskSettingInfrastructure.create(data);
  }
}

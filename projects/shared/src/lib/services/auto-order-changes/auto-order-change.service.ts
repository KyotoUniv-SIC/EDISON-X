import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutoOrderChangeInfrastructureService } from './auto-order-change.infrastructure.service';
import { AutoOrderChange } from '@local/common';

export interface IAutoOrderChangeInfrastructureService {
  get(id: string): Promise<AutoOrderChange | undefined>;
  get$(id: string): Observable<AutoOrderChange | undefined>;
  list(): Promise<AutoOrderChange[]>;
  list$(): Observable<AutoOrderChange[]>;
  listGroup(): Promise<AutoOrderChange[]>;
  listGroup$(): Observable<AutoOrderChange[]>;
  create(data: AutoOrderChange): Promise<void>;
}

@Injectable({
  providedIn: 'root',
})
export class AutoOrderChangeService {
  private iAutoOrderChangeInfrastructure: IAutoOrderChangeInfrastructureService;

  constructor(readonly autoOrderChangeInfrastructure: AutoOrderChangeInfrastructureService) {
    this.iAutoOrderChangeInfrastructure = autoOrderChangeInfrastructure;
  }

  get(id: string) {
    return this.iAutoOrderChangeInfrastructure.get(id);
  }

  get$(id: string) {
    return this.iAutoOrderChangeInfrastructure.get$(id);
  }

  list() {
    return this.iAutoOrderChangeInfrastructure.list();
  }
  
  list$() {
    return this.iAutoOrderChangeInfrastructure.list$();
  }
  
  listGroup() {
    return this.iAutoOrderChangeInfrastructure.listGroup();
  }
  
  listGroup$() {
    return this.iAutoOrderChangeInfrastructure.listGroup$();
  }

  create(data: AutoOrderChange) {
    return this.iAutoOrderChangeInfrastructure.create(data);
  }
}

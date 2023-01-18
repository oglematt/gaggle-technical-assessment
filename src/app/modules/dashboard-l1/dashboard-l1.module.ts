import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardL1RoutingModule } from './dashboard-l1-routing.module';
import {SharedModule} from "../../shared/shared.module";
import { IncidentQueueComponent } from './incident-queue/incident-queue.component';


@NgModule({
  declarations: [
    IncidentQueueComponent
  ],
  imports: [
    CommonModule,
    DashboardL1RoutingModule,
    SharedModule
  ]
})
export class DashboardL1Module { }

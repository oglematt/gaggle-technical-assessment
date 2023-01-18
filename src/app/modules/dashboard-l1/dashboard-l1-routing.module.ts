import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IncidentQueueComponent} from "./incident-queue/incident-queue.component";

const routes: Routes = [{
  path: '',
  component: IncidentQueueComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardL1RoutingModule { }

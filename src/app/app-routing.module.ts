import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from "./core/layouts/auth-layout/auth-layout.component";
import { MainLayoutComponent } from "./core/layouts/main-layout/main-layout.component";
import {AuthGuard} from "./core/guards/auth.guard";

const routes: Routes = [{
  path: 'login',
  component: AuthLayoutComponent
},{
  path: '',
  component: MainLayoutComponent,
  loadChildren: () => import('./modules/dashboard-l1/dashboard-l1.module').then(m => m.DashboardL1Module),
  canActivate: [ AuthGuard ]
}];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }

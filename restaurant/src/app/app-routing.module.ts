import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { LoyaltyComponent } from './loyalty/loyalty.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'admin',
    component: AdminSettingsComponent
  },
  {
    path: 'loyalty',
    component: LoyaltyComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

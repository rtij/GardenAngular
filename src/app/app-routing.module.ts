import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { NavComponent } from './nav/nav.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { AuthGuard } from './auth.guard';
import { ClientComponent } from './client/client.component';
import { UserComponent } from './user/user.component';
import { CarComponent } from './car/car.component';
import { EntrerComponent } from './entrer/entrer.component';
import { GarageComponent } from './garage/garage.component';
import { VueComponent } from './vue/vue.component';

const routes: Routes = [
  {
    path: 'Accueil', component: NavComponent
  },
  {
    path: '', component: NavComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'Voiture', component: CarComponent, canActivate: [AuthGuard]
  },
  {
    path: 'Menu', component: MenuComponent, canActivate: [AuthGuard]
  },
  {
    path: 'User', component: UserComponent, canActivate: [AuthGuard]
  },
  {
    path: 'Client', component: ClientComponent, canActivate: [AuthGuard]
  },
  {
    path: 'Entrer', component: EntrerComponent, canActivate: [AuthGuard]
  },
  {
    path: 'Garage', component: GarageComponent, canActivate: [AuthGuard]
  },
  {
    path: 'History', component: VueComponent, canActivate: [AuthGuard]
  },
  { path: '**', component: PageNotfoundComponent }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

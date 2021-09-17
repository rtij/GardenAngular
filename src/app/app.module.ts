import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AngularFileUploaderModule } from 'angular-file-uploader';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { ClientComponent } from './client/client.component';
import { CarComponent } from './car/car.component';
import { GarageComponent } from './garage/garage.component';
import { UserComponent } from './user/user.component';
import { EntrerComponent } from './entrer/entrer.component';
import { SortieComponent } from './sortie/sortie.component';
import { VueEntrerComponent } from './vue-entrer/vue-entrer.component';
import { VueComponent } from './vue/vue.component';
import { VueSortieComponent } from './vue-sortie/vue-sortie.component';
import { MenuComponent } from './menu/menu.component';
import { ErrorInterceptor } from './error.interceptor';
import { TokenInterceptor } from './token.interceptor';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { ClientFilterPipe } from './client-filter.pipe';
import { CarfilterPipe } from './filter/carfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    ClientComponent,
    CarComponent,
    GarageComponent,
    UserComponent,
    EntrerComponent,
    SortieComponent,
    VueEntrerComponent,
    VueComponent,
    VueSortieComponent,
    MenuComponent,
    PageNotfoundComponent,
    ClientFilterPipe,
    CarfilterPipe
  ],
  imports: [
    RouterModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgSelectModule,
    AngularFileUploaderModule
  ],
  providers: [  
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi:true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

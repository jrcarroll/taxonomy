import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { TaxonomyModule } from './taxonomy/taxonomy.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';

import {
  ApiService,
  FooterComponent,
  HeaderComponent,
  JwtService,
  UserService,
  SharedModule,
  AlertService,
  AuthenticationService
} from './shared';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], {useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    rootRouting,
    TaxonomyModule,
    SharedModule,
    LoginModule,
    RegisterModule,
    FormsModule
  ],
  providers: [
    ApiService,
    JwtService,
    UserService,
    AlertService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

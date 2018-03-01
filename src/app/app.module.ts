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
import { ClientModule } from './client/client.module';
import { ProviderModule } from './provider/provider.module';
import { DiscoveryModule } from './discovery/discovery.module';
import { UsersModule } from './users/users.module';
import { MatchingModule } from './matching/matching.module';
import { TouchPointsModule } from './touch-points/touch-points.module';
import { ScoringModule } from './scoring/scoring.module';
import { RfpModule } from './rfp/rfp.module';
import { ReportingModule } from './reporting/reporting.module';
import { HomeModule } from './home/home.module';

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
    FormsModule,
    HomeModule,
    ClientModule,
    ProviderModule,
    DiscoveryModule,
    UsersModule,
    MatchingModule,
    TouchPointsModule,
    ScoringModule,
    RfpModule,
    ReportingModule
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

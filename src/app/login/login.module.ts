import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


import { LoginComponent } from './login.component';
import { SharedModule } from '../shared';

const loginRouting: ModuleWithProviders = RouterModule.forChild([
  {
    //path: 'login',
    path: '',
    component: LoginComponent
    //,
    //canActivate: [NoAuthGuard]
  }
]);

@NgModule({
  imports: [
    CommonModule,
    loginRouting,
    SharedModule
  ],
  declarations: [
    LoginComponent
    
  ],

  providers: [
    //NoAuthGuard
  ]
})
export class LoginModule {}
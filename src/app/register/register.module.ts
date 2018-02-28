import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


import { RegisterComponent } from './register.component';
import { SharedModule } from '../shared';

const registerRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'register',
    component: RegisterComponent
    //,
    //canActivate: [NoAuthGuard]
  }
]);

@NgModule({
  imports: [
    CommonModule,
    registerRouting,
    SharedModule
  ],
  declarations: [
    RegisterComponent
    
  ],

  providers: [
    //NoAuthGuard
  ]
})
export class RegisterModule {}
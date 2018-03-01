import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { SharedModule } from '../shared';

const usersRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'users',
    component: UsersComponent
  }
]);

@NgModule({
  imports: [
    CommonModule,
    usersRouting,
    SharedModule
  ],
  declarations: [
    UsersComponent
  ]
})

export class UsersModule { }

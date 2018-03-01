import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ClientComponent } from './client.component';
import { SharedModule } from '../shared';

const clientRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'client',
    component: ClientComponent
  }
]);

@NgModule({
  imports: [
    CommonModule,
    clientRouting,
    SharedModule
  ],
  declarations: [
    ClientComponent
  ]
})

export class ClientModule { }

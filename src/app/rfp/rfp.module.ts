import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RfpComponent } from './rfp.component';
import { SharedModule } from '../shared';

const rfpRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'rfp',
    component: RfpComponent
  }
]);

@NgModule({
  imports: [
    CommonModule,
    rfpRouting,
    SharedModule
  ],
  declarations: [
    RfpComponent
  ]
})

export class RfpModule { }

import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DiscoveryComponent } from './discovery.component';
import { SharedModule } from '../shared';

const discoveryRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'discovery',
    component: DiscoveryComponent
  }
]);

@NgModule({
  imports: [
    CommonModule,
    discoveryRouting,
    SharedModule
  ],
  declarations: [
    DiscoveryComponent
  ]
})

export class DiscoveryModule { }

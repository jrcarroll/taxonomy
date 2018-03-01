import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProviderComponent } from './provider.component';
import { SharedModule } from '../shared';

const providerRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'provider',
    component: ProviderComponent
  }
]);

@NgModule({
  imports: [
    CommonModule,
    providerRouting,
    SharedModule
  ],
  declarations: [
    ProviderComponent
  ]
})

export class ProviderModule { }

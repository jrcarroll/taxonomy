import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatchingComponent } from './matching.component';
import { SharedModule } from '../shared';

const matchingRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'matching',
    component: MatchingComponent
  }
]);

@NgModule({
  imports: [
    CommonModule,
    matchingRouting,
    SharedModule
  ],
  declarations: [
    MatchingComponent
  ]
})

export class MatchingModule { }

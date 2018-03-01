import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ScoringComponent } from './scoring.component';
import { SharedModule } from '../shared';

const scoringRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'scoring',
    component: ScoringComponent
  }
]);

@NgModule({
  imports: [
    CommonModule,
    scoringRouting,
    SharedModule
  ],
  declarations: [
    ScoringComponent
  ]
})

export class ScoringModule { }

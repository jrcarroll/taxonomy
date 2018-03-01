import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TouchPointsComponent } from './touch-points.component';
import { SharedModule } from '../shared';

const touchPointsRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'touch-points',
    component: TouchPointsComponent
  }
]);

@NgModule({
  imports: [
    CommonModule,
    touchPointsRouting,
    SharedModule
  ],
  declarations: [
    TouchPointsComponent
  ]
})

export class TouchPointsModule { }

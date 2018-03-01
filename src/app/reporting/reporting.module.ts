import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ReportingComponent } from './reporting.component';
import { SharedModule } from '../shared';

const reportingRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'reporting',
    component: ReportingComponent
  }
]);

@NgModule({
  imports: [
    CommonModule,
    reportingRouting,
    SharedModule
  ],
  declarations: [
    ReportingComponent
  ]
})

export class ReportingModule { }

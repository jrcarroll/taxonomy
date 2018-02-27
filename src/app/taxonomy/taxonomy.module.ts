import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TaxonomyComponent } from './taxonomy.component';
//import { SharedModule } from '../shared';

//import { SuperTableModule } from 'ngx-super-table';
import { DataTableModule } from '../data-table';

const taxonomyRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'taxonomy',
    component: TaxonomyComponent
    //,
    //canActivate: [NoAuthGuard]
  }
]);

@NgModule({
  imports: [
    CommonModule,
    taxonomyRouting,
    //SharedModule,
    //SuperTableModule,
    DataTableModule
  ],
  declarations: [
    TaxonomyComponent
    
  ],

  providers: [
    //NoAuthGuard
  ]
})
export class TaxonomyModule {}

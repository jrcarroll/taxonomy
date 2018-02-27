import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
//import { MatCardModule}  from '@angular/material/card';

//import { DataTable, DataTableTranslations, DataTableResource } from 'angular-2-data-table';
import { DataTable, DataTableTranslations, DataTableResource } from '../data-table';
import { taxonomyData } from './data-table-taxonomy-data';

@Component({
  selector: 'taxonomy-page',
  templateUrl: './taxonomy.component.html',
  styleUrls: ['./taxonomy.component.css']
})

export class TaxonomyComponent {
  taxonomyResource = new DataTableResource(taxonomyData);
  taxonomyComponents = [];
  taxonomyCount = 0;

  //@ViewChild(DataTable) filmsTable;
  @ViewChild(DataTable) taxonomyTable;

  constructor(){
    //this.filmResource.count().then(count => this.filmCount = count);
    this.taxonomyResource.count().then(count => this.taxonomyCount = count);
  }

  reloadTaxonomy(params){
    this.taxonomyResource.query(params).then(taxonomyComponents => this.taxonomyComponents = taxonomyComponents);
  }

  cellColor(car){
    return 'rgb(255,255,' + (155 + Math.floor(100-((car.rating - 8.7)/1.3)*100)) + ')';
  };

  // special params
  translations = <DataTableTranslations>{
    indexColumn: 'Index column',
    expandColumn: 'Expand column',
    selectColumn: 'Select column',
    paginationLimit: 'Max results',
    paginationRange: 'Result range'
  };

}

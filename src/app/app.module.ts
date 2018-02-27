import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { TaxonomyModule } from './taxonomy/taxonomy.module';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], {useHash: true });

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    rootRouting,
    TaxonomyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

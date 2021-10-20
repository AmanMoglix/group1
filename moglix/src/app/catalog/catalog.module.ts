import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogFormComponent } from './components/catalog-form/catalog-form.component';
import { CatalogListComponent } from './components/catalog-list/catalog-list.component';


@NgModule({
  declarations: [
    CatalogFormComponent,
    CatalogListComponent
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule
  ]
})
export class CatalogModule { }

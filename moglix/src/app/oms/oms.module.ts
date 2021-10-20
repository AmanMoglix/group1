import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OmsRoutingModule } from './oms-routing.module';
import { OmsFormComponent } from './components/oms-form/oms-form.component';
import { OmsListComponent } from './components/oms-list/oms-list.component';


@NgModule({
  declarations: [
    OmsFormComponent,
    OmsListComponent
  ],
  imports: [
    CommonModule,
    OmsRoutingModule
  ]
})
export class OmsModule { }

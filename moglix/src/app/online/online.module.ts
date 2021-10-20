import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnlineRoutingModule } from './online-routing.module';
import { OnlineFormComponent } from './components/online-form/online-form.component';
import { OnlineListComponent } from './components/online-list/online-list.component';


@NgModule({
  declarations: [
    OnlineFormComponent,
    OnlineListComponent
  ],
  imports: [
    CommonModule,
    OnlineRoutingModule
  ]
})
export class OnlineModule { }

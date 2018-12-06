import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListComponent} from "./list/list.component";
import {RouterModule, Routes} from "@angular/router";
import { CreateComponent } from './create/create.component';
import {SharedModule} from "../../shared/shared.module";

const brandsRoutes: Routes = [
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'create',
    component: CreateComponent,
  }
];
@NgModule({
  declarations: [
    ListComponent,
    CreateComponent
  ],
  imports: [
    RouterModule.forChild(brandsRoutes),
    SharedModule
  ],
  exports: [
    RouterModule,
    ListComponent,
    CreateComponent
  ]
})
export class BrandsModule { }

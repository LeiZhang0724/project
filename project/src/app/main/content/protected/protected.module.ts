import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../shared/shared.module";

const protectRoutes: Routes = [
  {
    path: 'brands',
    loadChildren: './brands/brands.module#BrandsModule',
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(protectRoutes),
    SharedModule
  ],
  exports: [
    RouterModule
  ],
})
export class ProtectedModule {}

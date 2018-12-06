import { NgModule } from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {RouterModule, Routes} from "@angular/router";

const publicRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(publicRoutes),
  ],
  exports: [
    RouterModule,
    HomeComponent
  ]
})
export class PublicModule { }

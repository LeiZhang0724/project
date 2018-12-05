import { NgModule } from '@angular/core';
import {ContentComponent} from "./content/content.component";
import {MainComponent} from "./main.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    ContentComponent,
    MainComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
    MainComponent,
    RouterModule
  ]
})
export class MainModule { }

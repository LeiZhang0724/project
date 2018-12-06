import { NgModule } from '@angular/core';
import {ContentComponent} from "./content/content.component";
import {MainComponent} from "./main.component";
import {RouterModule} from "@angular/router";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import { BrandsComponent } from './content/protected/brands/brands.component';
import {SharedModule} from "./content/shared/shared.module";

@NgModule({
  declarations: [
    ContentComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    RouterModule,
    SharedModule
  ],
  exports: [
    MainComponent,
    RouterModule
  ]
})
export class MainModule { }

import { NgModule } from '@angular/core';
import {ContentComponent} from "./content/content.component";
import {MainComponent} from "./main.component";
import {RouterModule} from "@angular/router";
import {FooterComponent} from "./footer/footer.component";
import {SharedModule} from "./content/shared/shared.module";
import {NavbarComponent} from "./navbar/navbar.component";

@NgModule({
  declarations: [
    ContentComponent,
    MainComponent,
    FooterComponent,
    NavbarComponent
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

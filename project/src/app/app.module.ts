import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import {MainModule} from "./main/main.module";
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: './main/content/public/public.module#PublicModule'
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MainModule,
    RouterModule.forRoot(
      appRoutes,
      {
      enableTracing: false
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

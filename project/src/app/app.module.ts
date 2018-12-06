import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import {MainModule} from "./main/main.module";
import {RouterModule, Routes} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SharedModule} from "./main/content/shared/shared.module";

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './main/content/public/public.module#PublicModule'
  },
  {
    path: '',
    loadChildren: './main/content/protected/protected.module#ProtectedModule'
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MainModule,
    SharedModule,
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

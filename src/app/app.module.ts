import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

import { RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import {SearchService} from "./services/search.service";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NotFoundComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: '**',
        component: HomeComponent
      }])
  ],
  providers: [
    SearchService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

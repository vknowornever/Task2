import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { DisplayArticlesComponent } from './display-articles/display-articles.component';
import { TopnavComponent } from './topnav/topnav.component';
import { HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { SearcharticleComponent } from './searcharticle/searcharticle.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    DisplayArticlesComponent,
    TopnavComponent,
    SearcharticleComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

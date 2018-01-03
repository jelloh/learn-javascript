import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { headerComponent } from './header/app.headerComponent'
import { navComponent } from './nav/app.navComponent'
import { contentAreaComponent } from './contentArea/app.contentAreaComponent'
import { footerComponent } from './footer/app.footerComponent'
import { aboutComponent } from './about/app.aboutComponent'


@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    navComponent,
    contentAreaComponent,
    footerComponent,
    aboutComponent
  ],
  imports: [
    BrowserModule,

    // Seems to specify the different links for routing...
    RouterModule.forRoot([
      {
        path: 'about',
        component: aboutComponent
      },
      {
        path: '',
        component: contentAreaComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

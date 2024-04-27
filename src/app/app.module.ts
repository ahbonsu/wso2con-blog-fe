import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogEntryComponent } from './components/blog-entry/blog-entry.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { VerticalMenuComponent } from './components/vertical-menu/vertical-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogEntryComponent,
    LoginButtonComponent,
    VerticalMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

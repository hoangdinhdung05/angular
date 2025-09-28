import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HiComponent } from './hi/hi.component';
import { FormsModule } from '@angular/forms';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import {AuthorsDetailsComponent} from "./authors/authors-details.component";
import {AuthorsListComponent} from "./authors/authors-list.component";
import {ToggleComponent} from "./toggle.component";

@NgModule({
  //Typescript Decorator: cung cấp metadata
  declarations: [
    AppComponent,
    //Khai báo component
    HelloComponent,
    HiComponent,
    ProgressBarComponent,
    AuthorsDetailsComponent,
    AuthorsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToggleComponent
  ],
  providers: [],
  bootstrap: [AppComponent] //Là một trong những block chính của dự án
  //Các thuộc tính này liên quan mật thiết với AppModule
})
export class AppModule {}


//TypeScript Module

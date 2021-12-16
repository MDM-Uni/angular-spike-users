import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { UserList } from './user-list/user-list.component';
import {UsersService} from "./service/users.service";

@NgModule({
  declarations: [
    AppComponent,
    UserList
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserByIdComponent } from './components/user-by-id/user-by-id.component';
import { PostByIdComponent } from './components/post-by-id/post-by-id.component';
import { PhotoByIdComponent } from './components/photo-by-id/photo-by-id.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    PostListComponent,
    PhotoListComponent,
    UserByIdComponent,
    PostByIdComponent,
    PhotoByIdComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

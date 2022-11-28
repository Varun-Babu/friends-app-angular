import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFriendsComponent } from './add-friends/add-friends.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewFriendsComponent } from './view-friends/view-friends.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchFriendsComponent } from './search-friends/search-friends.component';

const myRoute : Routes=[
  {
    path:"",
    component:AddFriendsComponent
  },
  {
    path:"view",
    component:ViewFriendsComponent
  },
  {
    path:"search",
    component:SearchFriendsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddFriendsComponent,
    ViewFriendsComponent,
    NavbarComponent,
    SearchFriendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

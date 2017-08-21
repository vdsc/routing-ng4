import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

import { BorderDirective } from './border.directive';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MessagesComponent } from './messages/messages.component';
import {Routes, RouterModule} from '@angular/router';
import { PersonsComponent } from './persons/persons.component';
import { PersonComponent } from './person/person.component';
import { NoteditComponent } from './notedit/notedit.component';
import { NotFoundComponent } from './not-found/not-found.component'

import{ LoggerService} from './logger.service'

const appRoutes: Routes = [
  {path:'',component: HomeComponent},
  {path:'profile',component: ProfileComponent, children:[
    {path:':name/:age',component:PersonComponent},
    {path:'edit', component:NoteditComponent}
  ]},
  {path:'messages',component: MessagesComponent},
  {path:'messages/:msg1/:msg2',component: MessagesComponent},
  {path:'**', redirectTo:''}
];


@NgModule({
  declarations: [
    AppComponent,
    BorderDirective,
    HomeComponent,
    ProfileComponent,
    MessagesComponent,
    PersonsComponent,
    PersonComponent,
    NoteditComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { 
 

}
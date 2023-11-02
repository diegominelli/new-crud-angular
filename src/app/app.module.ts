import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { StartsComponent } from './contacts/starts/starts.component';
import { ReplacePipe } from './replace-pipe/replace-pipe';
import { RouterModule } from '@angular/router';
import { Error404Component } from './error-404/error-404.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContactsInfoComponent } from './contacts/contacts-info/contacts-info.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    StartsComponent,
    ReplacePipe,
    Error404Component,
    NavBarComponent,
    ContactsInfoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'contacts', pathMatch: 'full' },
      {
        path: 'contacts',
        component: ContactListComponent,
      },
      {
        path: 'contacts/info/:id',
        component: ContactsInfoComponent,
      },
      {
        path: '**',
        component: Error404Component,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { StartsComponent } from './contacts/starts/starts.component';

@NgModule({
  declarations: [AppComponent, ContactListComponent, StartsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

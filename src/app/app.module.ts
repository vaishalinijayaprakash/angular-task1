import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { ContactCreateComponent } from './contacts-data/contact-create/contact-create.component';
import { ContactDetailComponent } from './contacts-data/contact-detail/contact-detail.component';
import { ContactHeaderComponent } from  './contacts-data/contact-header/contact-header.component';
import { ContactListComponent } from './contacts-data/contact-list/contact-list.component';
import { ContactsComponent } from './contacts-data/contacts/contacts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    NavHeaderComponent,
    ContactCreateComponent,
    ContactDetailComponent,
    ContactHeaderComponent,
    ContactListComponent,
    ContactsComponent,
    LayoutComponent,
  
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

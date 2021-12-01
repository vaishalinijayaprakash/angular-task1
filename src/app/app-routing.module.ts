import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactCreateComponent } from './contacts-data/contact-create/contact-create.component';
import { ContactDetailComponent } from './contacts-data/contact-detail/contact-detail.component';
import { ContactsComponent } from './contacts-data/contacts/contacts.component';

const routes: Routes = [ 
  {path:'',component:ContactsComponent,
  children:[
     {path:'',component:ContactCreateComponent},
     {path:'new',component:ContactCreateComponent},
     {path:':id',component:ContactDetailComponent},
     {path:':id/edit',component:ContactCreateComponent},
     {path:"**",component:ContactDetailComponent}
    
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

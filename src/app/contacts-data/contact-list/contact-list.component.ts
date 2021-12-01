import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact';

import { ContactService } from 'src/app/services/contact.service';
// interface Country {
//   name: string;
//   email:string,
//   flag: string;
//   area: number;
//   population: number;
// }

// const COUNTRIES: Country[] = [
//   {
//     name: 'Russia',
//     email:'shivan01@gmail.com',
//     flag: 'f/f3/Flag_of_Russia.svg',
//     area: 17075200,
//     population: 146989754
//   },
//   {
//     name: 'Canada',
//     email:'vaishu01@gmail.com',
//     flag: 'c/cf/Flag_of_Canada.svg',
//     area: 9976140,
//     population: 36624199
//   },
//   {
//     name: 'United States',
//     email:'harish01@gmail.com',
//     flag: 'a/a4/Flag_of_the_United_States.svg',
//     area: 9629091,
//     population: 324459463
//   },
//   {
//     name: 'China',
//     email:'prakash01@gmail.com',
//     flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
//     area: 9596960,
//     population: 1409517397
//   }
// ];
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
   contacts:Contact[];
   selectedUserName :string;
   contactSubscription:Subscription
   p =1;
 
  constructor( private contactService:ContactService) { }

  ngOnInit(): void {

    this.contacts =this.contactService.getContacts();
    this.contactSubscription = this.contactService
      .getupdatedContacts()
      .subscribe((contacts) => {
        this.contacts = contacts;
        console.log(contacts);
      });
      
  }

  updateCheckedOptions(option, event){
    console.log('option', option );
  }
 
  onclick(selectedUserName:string){
   this.selectedUserName =selectedUserName;
   console.log(selectedUserName);
  }
  

   
ngOnDestroy(){
  this.contactSubscription.unsubscribe();
}
}


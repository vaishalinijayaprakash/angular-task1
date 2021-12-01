import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactChanged = new Subject <Contact[]>();
private contacts:Contact []=[
  {
    fullname: 'shiva',
    email: ' shiva01@gmail.com',
    address: 'k.k nagar',
    company: 'DoodleBlue Inovations',
    phone: 7397604605,
    
  },
  {
    fullname: 'vaishu',
    email: 'vaishu01@gmail.com',
    address: 'k.k nagar',
    company: 'DoodleBlue Inovations',
    phone: 7397604605,
    
  },
  {
    fullname: 'harish',
    email: 'harish01@gmail.com',
    address: 'k.k nagar',
    company: 'DoodleBlue Inovations',
    phone: 7397604605,
     
  },

  {
    fullname: 'vaishu',
    email: 'vaishu01@gmail.com',
    address: 'k.k nagar',
    company: 'DoodleBlue Inovations',
    phone: 7397604605,
    
  },
  {
    fullname: 'harish',
    email: 'harish01@gmail.com',
    address: 'k.k nagar',
    company: 'DoodleBlue Inovations',
    phone: 7397604605,
     
  },
  {
    fullname: 'vaishu',
    email: 'vaishu01@gmail.com',
    address: 'k.k nagar',
    company: 'DoodleBlue Inovations',
    phone: 7397604605,
    
  },
  {
    fullname: 'harish',
    email: 'harish01@gmail.com',
    address: 'k.k nagar',
    company: 'DoodleBlue Inovations',
    phone: 7397604605,
     
  },



];

  constructor() { }

  getContacts(){
    return [...this.contacts];
  }

  getContact(id:number){
    return this.contacts[id];
  }
  getupdatedContacts() {
    return this.contactChanged.asObservable();
  }
  addcontact(contact:Contact){
    this.contacts.push(contact);
    this.contactChanged.next(this.contacts.slice());
  }
  updateContact(index:number,contact:Contact){
   this.contacts[index] = contact;
   this.contactChanged.next(this.contacts.slice());
   
  }
  deleteContact(index: number) {
    this.contacts.splice(index);
    this.contactChanged.next(this.contacts.slice());
  }
}

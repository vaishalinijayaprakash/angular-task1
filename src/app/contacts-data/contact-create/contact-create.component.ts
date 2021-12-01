import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router,Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {
   
  detailForm: FormGroup;
  contact: Contact;
  submitted = false;
  editMode = false;
  routeSub: Subscription;
id:number;
  constructor( private contactService:ContactService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.routeSub =this.route.params.subscribe((params:Params) =>{
this.id =+params.id;
this.editMode =params.id !=null;
this.initForm();
    });
   


  }


  get f() {
    return this.detailForm.controls;
  }
  private initForm() {
    let fullname = '';
    let email = '';
    let phone;
    let company = '';
    let address = '';
   
  if (this.editMode) {
    const contact: Contact = this.contactService.getContact(this.id);
    fullname = contact.fullname;
    email = contact.email;
    phone = contact.phone;
    company = contact.company;
    address = contact.address;
  }
    this.detailForm = new FormGroup({
      fullname: new FormControl(fullname, Validators.required),
      email: new FormControl(email, [Validators.required, Validators.email]),
      phone: new FormControl(phone, [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
      ]),
      company: new FormControl(company, Validators.required),
      address: new FormControl(address, Validators.required),

    })
    console.log( this.contact);
  }

  onSubmit() {
    this.submitted = true;
    if(!this.detailForm.valid){
      return ;
    }
if(this.editMode){
  this.contactService.updateContact(this.id,this.detailForm.value);
  alert("values are updated");
  this.submitted =false;
  this.detailForm.reset();
  console.log(this.editMode);
}
else{
  this.contactService.addcontact(this.detailForm.value);
alert('values are  added')
  this.submitted =false;
  this.detailForm.reset();
}
this.onCancel();
  }
onCancel(){
  this.router.navigate(['../'],{relativeTo:this.route})
}

  onDelete() {
    this.contactService.deleteContact(this.id);
    
    this.router.navigate([''], { relativeTo: this.route });
  }
  ngOnDestroy(){
    this.routeSub.unsubscribe();
  }
}

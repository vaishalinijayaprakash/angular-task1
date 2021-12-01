import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
 contact:Contact;
 id:number;
 routeSubs:Subscription;
  constructor( private contactService:ContactService,
    private route:ActivatedRoute,
    private router:Router) { }

  
  ngOnInit(): void {
    this.routeSubs = this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.contact = this.contactService.getContact(this.id);
      if (!this.contactService.getContact(this.id)) {
        this.router.navigate(['../'], { relativeTo: this.route });
      }
    });
  }
  onEditContact(){
     this.router.navigate(['edit'],{relativeTo:this.route});
  }

ngOnDestroy(){
  this.routeSubs.unsubscribe();
}
}

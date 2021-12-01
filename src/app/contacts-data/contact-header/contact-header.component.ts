import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-header',
  templateUrl: './contact-header.component.html',
  styleUrls: ['./contact-header.component.css']
})
export class ContactHeaderComponent implements OnInit {
   

  constructor(private route:ActivatedRoute, 
    private router:Router) { }

  ngOnInit(): void {
  }
  addContact() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

}

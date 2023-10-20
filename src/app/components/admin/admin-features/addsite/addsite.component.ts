import { HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Transactions } from '../Transactions';
import { TransactionServiceService } from '../transaction-service.service';
import { Sites } from '../Sites';
import { SitesService } from '../sites.service';

@Component({
  selector: 'app-addsite',
  templateUrl: './addsite.component.html',
  styleUrls: ['./addsite.component.css']
})
export class AddsiteComponent {
  myForm :FormGroup;
  @Output() aded = new EventEmitter<Sites>();
 site:Sites;
  constructor(private siteserv:SitesService) { }

  ngOnInit(): void {
    
    this.site = new Sites(); // Initialize the transaction object

    this.myForm=new FormGroup({
      shopName: new FormControl(),
      url: new FormControl(),
      technicianName: new FormControl(),
      description: new FormControl(),
      category: new FormControl(),
      phoneNumberSite: new FormControl(),
      nameTechnician: new FormControl(),
      revenue: new FormControl(),
      activitySector: new FormControl(),
      emailSite: new FormControl(),
      completeAddress: new FormControl(),
    }) 
  }
  
  onSubmit() {
    // Handle the form submission here
    this.add();
  }

  add() {
    console.log(this.site); // Check the transaction object in the console
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    this.siteserv.addSites(this.site, headers).subscribe(
      response => {
        // Handle the response here
      },
      error => {
        // Handle the error here
      }
    );
  
    this.aded.emit(this.site);
    this.myForm.reset();
    window.location.reload();
  }
  
}

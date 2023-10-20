import { Component } from '@angular/core';

@Component({
  selector: 'app-integration',
  templateUrl: './integration.component.html',
  styleUrls: ['./integration.component.scss']
})
export class IntegrationComponent {
  showkitpaiementContent = false;
  showcyberacheteurContent= false;
  showSolutionecommerceContent =false;
  showServicecompletdepaiementContent=false;
  constructor() { }

  ngOnInit(): void {
  }
  showSolutionecommerce(): void {
    this.showkitpaiementContent = false;
    this.showSolutionecommerceContent = true;
    this.showServicecompletdepaiementContent =false;
    this.showcyberacheteurContent= false;

   
  }


  showServicecompletdepaiement(): void {
    this.showkitpaiementContent = false;
    this.showSolutionecommerceContent = false;
    this.showServicecompletdepaiementContent =true;
    this.showcyberacheteurContent= false;


   
  }
  showkitpaiement(): void {
    this.showkitpaiementContent = true;
    this.showSolutionecommerceContent = false;
    this.showServicecompletdepaiementContent =false;
    this.showcyberacheteurContent= false;

   

  }


  showcyberacheteur(): void {
    this.showkitpaiementContent = false;
    this.showcyberacheteurContent= true;
    this.showSolutionecommerceContent = false;
    this.showServicecompletdepaiementContent =false;
   

  }

}

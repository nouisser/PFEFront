import { Component } from '@angular/core';

@Component({
  selector: 'app-cgu',
  templateUrl: './cgu.component.html',
  styleUrls: ['./cgu.component.scss']
})
export class CguComponent {
  showparticuliersContent = false;
  showprofessionnelsContent =false;
  
  constructor() { }

  ngOnInit(): void {
  }
  showprofessionnels(): void {

    this.showprofessionnelsContent = true;
    this.showparticuliersContent = false;

    

   
  }


  showparticuliers(): void {
    this.showparticuliersContent = true;
    this.showprofessionnelsContent = false;
  

   

  }

}

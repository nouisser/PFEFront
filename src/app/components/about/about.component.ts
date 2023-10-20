import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  showGateway = false;
  showCheckout = false;
  showGppay = false;

  toggleContent(content: string) {
    if (content === 'gateway') {
      this.showGateway = !this.showGateway;
      this.showCheckout = false;
      this.showGppay = false;
    }
    if (content === 'checkout') {
      this.showCheckout = !this.showCheckout;
      this.showGateway = false;
      this.showGppay = false;
    }
    if (content === 'gppay') {
      this.showGppay = !this.showGppay;
      this.showGateway = false;
      this.showCheckout = false;
    }
  }

}

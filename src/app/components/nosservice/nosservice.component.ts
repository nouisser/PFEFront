import { Component } from '@angular/core';

@Component({
  selector: 'app-nosservice',
  templateUrl: './nosservice.component.html',
  styleUrls: ['./nosservice.component.scss']
})
export class NosserviceComponent {
  showSolutionContent = true;
  showAvantagesContent = false;
  showAutreServiceContent = false;

  constructor() { }

  ngOnInit(): void {
  }

  showSolution(): void {
    this.showSolutionContent = true;
    this.showAvantagesContent = false;
    this.showAutreServiceContent = false;
  }

  showAvantages(): void {
    this.showSolutionContent = false;
    this.showAvantagesContent = true;
    this.showAutreServiceContent = false;
  }

  showAutreService(): void {
    this.showSolutionContent = false;
    this.showAvantagesContent = false;
    this.showAutreServiceContent = true;
  }
}


import { Component } from '@angular/core';
import { boutiques } from '../const/boutiques';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailsboutiques',
  templateUrl: './detailsboutiques.component.html',
  styleUrls: ['./detailsboutiques.component.scss']
})
export class DetailsboutiquesComponent {
  boutique:any;
  id:any
boutiques=boutiques
selectedBoutiques:any
  public currentPage = 1;
  public pageSize = 16; // Déclaration de la variable pageSize
  constructor() { }




  getPageNumbers() {
    const totalPages = this.getTotalPages();
    return Array(totalPages).fill(0).map((x, i) => i + 1);
  }

  getTotalPages() {
    return Math.ceil(this.boutiques.length / this.pageSize);
  }
  
  getBoutiqueDataForPage(page: number) {
    const startIndex = (page - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.boutiques.slice(startIndex, endIndex);
  }
  


}
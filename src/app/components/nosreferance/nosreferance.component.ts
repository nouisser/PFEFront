import { Component } from '@angular/core';

@Component({
  selector: 'app-nosreferance',
  templateUrl: './nosreferance.component.html',
  styleUrls: ['./nosreferance.component.scss']
})
export class NosreferanceComponent {
  images = [
    'assets/img/about.jpg',
    'assets/img/about.jpg',
    'assets/img/about.jpg',
    'assets/img/slide.jpg',
    'assets/img/slide.jpg',
    'assets/img/slide.jpg',
    'assets/img/slide.jpg',
    'assets/img/about1.jpg',
    'assets/img/2.jpg',
    'assets/img/2.jpg',
    'assets/img/about.jpg',
    'assets/img/about.jpg',
    'assets/img/slide.jpg',
    'assets/img/slide.jpg',
    'assets/img/slide.jpg',
  ];
  itemsPerPage = 4;
  currentPage = 1;

  get imagePages() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.images.slice(startIndex, endIndex).reduce((result:any, value, index, array) => {
      if (index % this.itemsPerPage === 0) {
        result.push(array.slice(index, index + this.itemsPerPage));
      }
      return result;
    }, []);
  }

  get pageNumbers() {
    return Array(Math.ceil(this.images.length / this.itemsPerPage)).fill(0).map((_, index) => index + 1);
  }

  setCurrentPage(pageNumber: number) {
    this.currentPage = pageNumber;
  }
}



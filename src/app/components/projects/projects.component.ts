import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { boutiques } from '../const/boutiques';
import {CarouselComponent, OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    dotsEach: 1,
    nav: true,
    margin: 5,
    autoplay: true, // activer l'autoplay
    autoplayTimeout: 3000, // temps entre chaque slide en millisecondes
    responsive: {
      0: {
        items: 1,
      },
      700: {
        items: 4,
      }
    }
};

boutiques = boutiques;

constructor(private router: Router) { }

displayBoutiqueContent(boutique:any) {
    this.router.navigate(['planetjob', boutique.id]);
}
}
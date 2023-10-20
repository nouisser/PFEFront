import { Component } from '@angular/core';
import { boutiques } from '../const/boutiques';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-boutiquepage',
  templateUrl: './boutiquepage.component.html',
  styleUrls: ['./boutiquepage.component.scss']
})
export class BoutiquepageComponent {
  boutique:any;
  id:any
boutiques=boutiques
selectedBoutiques:any
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

this.route.params.subscribe(params=>{
        this.id = params['id'];
        this.boutiques.map((boutique)=>{
          console.log(boutique)


          if (boutique.id.toString()== this.id){

            this.selectedBoutiques = boutique
            console.log(this.selectedBoutiques)
          }
        }

        )
    })  }







}
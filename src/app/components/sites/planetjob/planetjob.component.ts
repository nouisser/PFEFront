import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { boutiques } from 'src/app/components/const/boutiques';

@Component({
  selector: 'app-planetjob',
  templateUrl: './planetjob.component.html',
  styleUrls: ['./planetjob.component.scss']
})
export class PlanetjobComponent {
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

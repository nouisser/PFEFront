import { Component } from '@angular/core';
import { SitesService } from '../sites.service';
import { Router } from '@angular/router';
import { Sites } from '../Sites';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent {
  ngOnInit(): void {
    // Add your initialization logic here
  }



  siteData:any=[]
  data: any;

  activeindex=-1;

  location='Submit';

  listsites : Sites[]









  showAdd = false;







  constructor(private sitesser:SitesService,private router:Router) {
    

  this.sitesser.getSites().subscribe((allData)=>
  {
    console.log(allData)
    this.siteData=allData
    console.log(allData)

  })


  }

  deleteSites(id:any,i:number){
    this.sitesser.deleteSites(id).subscribe((result)=>
    {console.log(result)
     // this.invitattionser.splice(i,1)
      this.siteData.splice(i,1)  
      console.log(result)
  //this.ngOnInit()
    })
  }

  showForm() {
    this.showAdd = true;
  }
  
  addsite(i:Sites){
    this.listsites.push(i);
      }
      updateSite(id:any){
        this.router.navigate(['updatesite', id]);
      }
}





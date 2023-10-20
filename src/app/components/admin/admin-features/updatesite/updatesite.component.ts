import { Component } from '@angular/core';
import { Sites } from '../Sites';
import { SitesService } from '../sites.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatesite',
  templateUrl: './updatesite.component.html',
  styleUrls: ['./updatesite.component.css']
})
export class UpdatesiteComponent {
  id: number;
  sites: Sites = new Sites();

  constructor(
    private siteservice: SitesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.siteservice.getSitebyid(this.id).subscribe(
      data => {
        this.sites = data;
      },
      error => console.log(error)
    );
  }

  onSubmit() {
    console.log(this.sites);
    this.siteservice.updateSite(this.sites.id, this.sites).subscribe(
      data => {
        console.log(data);
        this.goToSiteList();
      },
      error => console.log(error)
    );
  }

  goToSiteList() {
    this.router.navigate(['site']);
  }
}

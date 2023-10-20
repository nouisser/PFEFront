import {Component, OnInit, Renderer2} from '@angular/core';
import {AuthService} from "./components/Authentication/auth-service.service";
import {TokenStorageService} from "./components/Authentication/token-storage.service";
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'GpgCheckout';
  roles = ''
  isAdmin = false
  constructor(private authService: AuthService,
              private tokenStorage: TokenStorageService,
              private router:Router,
              private renderer: Renderer2) { }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        if (this.tokenStorage.getToken()) {
          this.roles = this.tokenStorage.getUser().roles;
          if (this.roles[0] === 'ROLE_ADMIN' || this.roles[0] === 'ROLE_MARCHAND') {
            this.isAdmin = true
            this.importCssFile('assets/css/style.css','rm')
            this.importCssFile('assets/css/bootstrap.min.css','rm')
            this.importCssFile('assets/lib/owlcarousel/assets/owl.carousel.min.css','rm')
            this.importCssFile('assets/lib/animate/animate.min.css','rm')
          } else {
            this.importCssFile('assets/css/style.css','add')
            this.importCssFile('assets/css/bootstrap.min.css','add')
            this.importCssFile('assets/lib/owlcarousel/assets/owl.carousel.min.css','add')
            this.importCssFile('assets/lib/animate/animate.min.css','add')
          }
        }
        else {
          this.importCssFile('assets/css/style.css','add')
          this.importCssFile('assets/css/bootstrap.min.css','add')
          this.importCssFile('assets/lib/owlcarousel/assets/owl.carousel.min.css','add')
          this.importCssFile('assets/lib/animate/animate.min.css','add')
        }
      });
  }

  importCssFile(href:any,action:any) {
    const link = this.renderer.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    if (action === 'add') {
      this.renderer.appendChild(document.head, link);
    } else if (action === 'rm'){
      this.renderer.removeChild(document.head, link);
    }
  }

}

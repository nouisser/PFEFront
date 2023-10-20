import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutsComponent } from './components/abouts/abouts.component';
import { BoutiquepageComponent } from './components/boutiquepage/boutiquepage.component';
import { CguComponent } from './components/cgu/cgu.component';
import { ContactComponent } from './components/contact/contact.component';
import { DetailsServiceComponent } from './components/details-service/details-service.component';
import { DetailsboutiquesComponent } from './components/detailsboutiques/detailsboutiques.component';
import { EspaceparticulierComponent } from './components/espaceparticulier/espaceparticulier.component';
import { EspaceprofessionnelComponent } from './components/espaceprofessionnel/espaceprofessionnel.component';
import { ExploreComponent } from './components/explore/explore.component';
import { FeatureComponent } from './components/feature/feature.component';
import { GlobalpaymentgatewayComponent } from './components/globalpaymentgateway/globalpaymentgateway.component';
import { GpgCheckoutComponent } from './components/gpg-checkout/gpg-checkout.component';
import { GppayComponent } from './components/gppay/gppay.component';
import { HomeComponent } from './components/home/home.component';
import { IntegrationComponent } from './components/integration/integration.component';
import { LoginprofessionelComponent } from './components/loginprofessionel/loginprofessionel.component';
import { NosreferanceComponent } from './components/nosreferance/nosreferance.component';
import { NosserviceComponent } from './components/nosservice/nosservice.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProjectComponent } from './components/project/project.component';
import { PspComponent } from './components/psp/psp.component';
import { ServicesComponent } from './components/services/services.component';
import { PlanetjobComponent } from './components/sites/planetjob/planetjob.component';
import { SolutionComponent } from './components/solution/solution.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { RegisterComponent } from './components/Authentication/register/register.component';
import { SigninComponent } from './components/Authentication/signin/signin.component';
import { LoginComponent } from './components/Authentication/login/login.component';
import {AdminFeaturesComponent} from "./components/admin/admin-features/admin-features.component";
import { TransactionComponent } from './components/admin/admin-features/transaction/transaction.component';


const routes: Routes = [{path:'',redirectTo: 'home', pathMatch: 'full'
},
  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutsComponent},
  {path:'project',component:ProjectComponent},
  {path:'service',component:ServicesComponent},
  {path:'feature',component:FeatureComponent},
  {path:'teams',component:TeamsComponent},
  {path:'testimonials',component:TestimonialsComponent},
  {path:'notfound',component:NotfoundComponent},
  {path:'espaceparticulier',component:EspaceparticulierComponent},
  {path:'espaceprofessionnel',component:EspaceprofessionnelComponent},
  {path:'loginprof',component:LoginprofessionelComponent},
  {path:'explore',component:ExploreComponent},
  {path:'detail',component:DetailsServiceComponent},
  {path:'gpgCheckout',component:GpgCheckoutComponent},
  {path:'gppay',component:GppayComponent},

  {path:'globalpaymentgateway',component:GlobalpaymentgatewayComponent},
  {path:'nosservice',component:NosserviceComponent},
  {path:'solution',component:SolutionComponent},
  {path:'psp',component:PspComponent},
  {path:'integration',component:IntegrationComponent},
  {path:'cgu',component:CguComponent},
  { path:'planetjob/:id', component:PlanetjobComponent },

  { path:'nosreferance', component:NosreferanceComponent },

  { path:'detailsboutiques', component:DetailsboutiquesComponent },
  { path:'detailsboutiques/:id', component:BoutiquepageComponent},
  { path:'register', component:RegisterComponent },


  { path: 'signin', component: SigninComponent },
  { path: 'login', component: LoginComponent },

  {
    path: 'admin',
    component: AdminFeaturesComponent,
    children: [
      {
        path: 'admin',
        loadChildren: () => import('./components/admin/admin-features/admin-features.module').then(x => x.AdminFeaturesModule)
      }]}

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

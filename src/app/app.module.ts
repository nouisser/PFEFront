import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { AboutComponent } from './components/about/about.component';
import { AboutnavComponent } from './components/aboutnav/aboutnav.component';
import { AboutsComponent } from './components/abouts/abouts.component';
import { CallbackComponent } from './components/callback/callback.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CguComponent } from './components/cgu/cgu.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { DetailsServiceComponent } from './components/details-service/details-service.component';
import { EspaceparticulierComponent } from './components/espaceparticulier/espaceparticulier.component';
import { EspaceprofessionnelComponent } from './components/espaceprofessionnel/espaceprofessionnel.component';
import { FactsComponent } from './components/facts/facts.component';
import { FeatureComponent } from './components/feature/feature.component';
import { FeaturesComponent } from './components/features/features.component';
import { FooterComponent } from './components/footer/footer.component';
import { GlobalpaymentgatewayComponent } from './components/globalpaymentgateway/globalpaymentgateway.component';
import { GpgCheckoutComponent } from './components/gpg-checkout/gpg-checkout.component';
import { GppayComponent } from './components/gppay/gppay.component';
import { HomeComponent } from './components/home/home.component';
import { IntegrationComponent } from './components/integration/integration.component';
import { LoginprofessionelComponent } from './components/loginprofessionel/loginprofessionel.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NosserviceComponent } from './components/nosservice/nosservice.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NotfoundsComponent } from './components/notfounds/notfounds.component';
import { PageheaderComponent } from './components/pageheader/pageheader.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PspComponent } from './components/psp/psp.component';
import { ServiceComponent } from './components/service/service.component';
import { ServicesComponent } from './components/services/services.component';
import { PlanetjobComponent } from './components/sites/planetjob/planetjob.component';
import { SolutionComponent } from './components/solution/solution.component';
import { TeamComponent } from './components/team/team.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CarouselModule} from 'ngx-owl-carousel-o';
import { NosreferanceComponent } from './components/nosreferance/nosreferance.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsboutiquesComponent } from './components/detailsboutiques/detailsboutiques.component';
import { BoutiquepageComponent } from './components/boutiquepage/boutiquepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/Authentication/register/register.component';
import { SigninComponent } from './components/Authentication/signin/signin.component';
import { LoginComponent } from './components/Authentication/login/login.component';
import {AdminFeaturesModule} from "./components/admin/admin-features/admin-features.module";
import { ChartsModule } from 'ng2-charts';
import {ChartModule} from "angular-highcharts";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ContactComponent,
    AboutComponent,
    ServiceComponent,
    FooterComponent,
    TestimonialComponent,
    CopyrightComponent,
    CarouselComponent,
    FactsComponent,
    CallbackComponent,
    FeaturesComponent,
    ProjectsComponent,
    TeamComponent,
    PageheaderComponent,
    ContactsComponent,
    AboutsComponent,
    ProjectComponent,
    PageheaderComponent,
    ServicesComponent,
    FeatureComponent,
    TeamsComponent,
    TestimonialsComponent,
    NotfoundComponent,
    NotfoundsComponent,
    EspaceparticulierComponent,
    EspaceprofessionnelComponent,
    LoginprofessionelComponent,
    AboutnavComponent,
    DetailsServiceComponent,
    PlanetjobComponent,
    GpgCheckoutComponent,
    GppayComponent,
    GlobalpaymentgatewayComponent,
    NosserviceComponent,
    SolutionComponent,
    PspComponent,
    IntegrationComponent,
    CguComponent,
    ProjectsComponent,
    NosreferanceComponent,
    DetailsboutiquesComponent,
    BoutiquepageComponent,
    RegisterComponent,
    SigninComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
   AdminFeaturesModule,
    ChartModule,
    ChartsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

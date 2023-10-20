import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminFeaturesRoutingModule } from './admin-features-routing.module';
import { AdminFeaturesComponent } from './admin-features.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MainComponent} from "./main/main.component";
import {SideNavComponent} from "./side-nav/side-nav.component";
import {HeaderComponent} from "./header/header.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {SalesByMonthComponent} from "./sales-by-month/sales-by-month.component";
import {TopWidgetsComponent} from "./top-widgets/top-widgets.component";
import {SalesByCategoryComponent} from "./sales-by-category/sales-by-category.component";
import {LastFewTransactionsComponent} from "./last-few-transactions/last-few-transactions.component";
import {TopThreeProductsComponent} from "./top-three-products/top-three-products.component";
import {ChartModule} from "angular-highcharts";
import { ChartsModule } from 'ng2-charts';
import { TransactionComponent } from './transaction/transaction.component';
import { UpdatetransactionComponent } from './updatetransaction/updatetransaction.component';
import { AddtransactionComponent } from './addtransaction/addtransaction.component';
import { SitesComponent } from './sites/sites.component';
import { AddsiteComponent } from './addsite/addsite.component';
import { UpdatesiteComponent } from './updatesite/updatesite.component';
import { UsersComponent } from './users/users.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';



@NgModule({
  declarations: [
    AdminFeaturesComponent,
    MainComponent,
    SideNavComponent,
    HeaderComponent,
    SalesByMonthComponent,
    TopWidgetsComponent,
    SalesByCategoryComponent,
    LastFewTransactionsComponent,
    TopThreeProductsComponent,
    TransactionComponent,
    UpdatetransactionComponent,
    AddtransactionComponent,
    SitesComponent,
    AddsiteComponent,
    UpdatesiteComponent,
    UsersComponent,
    AdduserComponent,
    UpdateuserComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    AdminFeaturesRoutingModule,
    FontAwesomeModule,
    ChartModule,
    ChartsModule      

  ]
})
export class AdminFeaturesModule { }

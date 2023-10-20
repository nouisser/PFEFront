import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import {AdminFeaturesComponent} from "./admin-features.component";
import { TransactionComponent } from './transaction/transaction.component';
import { UpdatetransactionComponent } from './updatetransaction/updatetransaction.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddtransactionComponent } from './addtransaction/addtransaction.component';
import { SitesComponent } from './sites/sites.component';
import { UpdatesiteComponent } from './updatesite/updatesite.component';
import { UsersComponent } from './users/users.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { AdduserComponent } from './adduser/adduser.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminFeaturesComponent,
    },
  {
    path: '**',
    redirectTo: 'dashboard'
  },
  { path: 'transaction', component: TransactionComponent },
  { path: 'addtransaction', component: AddtransactionComponent },

  { path: 'updatetransaction/:id', component: UpdatetransactionComponent },
  { path: 'site', component: SitesComponent },
  { path: 'updatesite/:id', component: UpdatesiteComponent },
  { path: 'user', component: UsersComponent },
  { path: 'updateuser/:id', component: UpdateuserComponent },
  { path: 'adduser', component: AdduserComponent},

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule, // Importez FormsModule

    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AdminFeaturesRoutingModule { }

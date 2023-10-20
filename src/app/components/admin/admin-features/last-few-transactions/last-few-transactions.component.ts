import { Component, OnInit } from '@angular/core';
import { TransactionServiceService } from '../transaction-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-last-few-transactions',
  templateUrl: './last-few-transactions.component.html',
  styleUrls: ['./last-few-transactions.component.scss']
})
export class LastFewTransactionsComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



  transactionData:any=[]
  data: any;

  activeindex=-1;

  location='Submit';










  showAdd = false;







  constructor(private transactionser:TransactionServiceService,private router:Router) {
    

  this.transactionser.getAllTransactions().subscribe((allData)=>
  {
    console.log(allData)
    this. transactionData=allData
  })
}

 listinv()
{
  this.transactionser.getAllTransactions().subscribe((allData)=>
  {
    console.log(allData)
    this. transactionData=allData
  })

}

  
}
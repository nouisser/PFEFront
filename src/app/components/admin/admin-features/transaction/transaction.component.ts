import { Component } from '@angular/core';
import { TransactionServiceService } from '../transaction-service.service';
import { Router } from '@angular/router';
import { Transactions } from '../Transactions';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
  ngOnInit(): void {
    // Add your initialization logic here
  }



  transactionData:any=[]
  data: any;

  activeindex=-1;

  location='Submit';


  listtransaction : Transactions[]








  showAdd = false;







  constructor(private transactionser:TransactionServiceService,private router:Router) {
    

  this.transactionser.getTransactions().subscribe((allData)=>
  {
    console.log(allData)
    this. transactionData=allData
  })
}

 listinv()
{
  this.transactionser.getTransactions().subscribe((allData)=>
  {
    console.log(allData)
    this. transactionData=allData
  })


  
}
showForm() {
  this.showAdd = true;
}



addtransaction(i:Transactions){
  this.listtransaction.push(i);
    }
  deleteTransactions(idTransaction:any,i:number){
    this.transactionser.deleteTransactions(idTransaction).subscribe((result)=>
    {console.log(result)
     // this.invitattionser.splice(i,1)
      this.transactionData.splice(i,1)  
      console.log(result)
  //this.ngOnInit()
    })
  }
  updateTransaction(idTransaction:any){
    this.router.navigate(['updatetransaction', idTransaction]);
  }
  


    
  }
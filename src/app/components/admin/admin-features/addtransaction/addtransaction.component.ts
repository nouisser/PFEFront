import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Transactions } from '../Transactions';
import { TransactionServiceService } from '../transaction-service.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-addtransaction',
  templateUrl: './addtransaction.component.html',
  styleUrls: ['./addtransaction.component.css']
})
export class AddtransactionComponent {
  myForm :FormGroup;
  @Output() aded = new EventEmitter<Transactions>();
 transaction:Transactions;
  constructor(private transactionserv:TransactionServiceService) { }

  ngOnInit(): void {
    
    this.transaction = new Transactions(); // Initialize the transaction object

    this.myForm=new FormGroup({
      result: new FormControl(),
      datetransaction: new FormControl(),
      surname: new FormControl(),
      givenName: new FormControl(),
      montant: new FormControl(),
      devise: new FormControl(),

    }) 
  }
  
  onSubmit() {
    // Handle the form submission here
    this.add();
  }

  add() {
    console.log(this.transaction); // Check the transaction object in the console
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    this.transactionserv.addTransaction(this.transaction, headers).subscribe(
      response => {
        // Handle the response here
      },
      error => {
        // Handle the error here
      }
    );
  
    this.aded.emit(this.transaction);
    this.myForm.reset();
    window.location.reload();
  }
  
}

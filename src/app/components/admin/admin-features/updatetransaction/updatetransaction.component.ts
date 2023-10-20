import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionServiceService } from '../transaction-service.service';
import { Transactions } from '../Transactions';

@Component({
  selector: 'app-updatetransaction',
  templateUrl: './updatetransaction.component.html',
  styleUrls: ['./updatetransaction.component.css']
})
export class UpdatetransactionComponent {
  id: number;
  Transactions: Transactions = new Transactions();

  constructor(
    private transactionservice: TransactionServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.transactionservice.getTransactionbyid(this.id).subscribe(
      data => {
        this.Transactions = data;
      },
      error => console.log(error)
    );
  }

  onSubmit() {
    console.log(this.Transactions);
    this.transactionservice.updateTransaction(this.Transactions.idTransaction, this.Transactions).subscribe(
      data => {
        console.log(data);
        this.goToTransactionList();
      },
      error => console.log(error)
    );
  }

  goToTransactionList() {
    this.router.navigate(['transaction']);
  }
}

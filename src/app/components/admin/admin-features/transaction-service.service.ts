import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ITypePercentage } from './Transaction.interface';
import { Transactions } from './Transactions';
import {  HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionServiceService {
  constructor(private httpClient: HttpClient) { }
  getTypePercentage(): Observable<Array<ITypePercentage>> {
    return this.httpClient
      .get<Array<ITypePercentage>>(`http://localhost:8089/SpringMVC/api/Transaction/pourcentage`)
      .pipe(map((d: Array<ITypePercentage>) => d));
  }

  getTransactions(): Observable<Array<Transactions>> {
    return this.httpClient

    .get<Array<Transactions>>(`http://localhost:8089/SpringMVC/api/getallTransaction
    `)
    .pipe(map((d: Array<Transactions>) => d));
  }

  getAllTransactions(){
    return this.httpClient.get('http://localhost:8089/SpringMVC/api/getallTransaction')
  }


  deleteTransactions(idTransaction:any[]){
    return this.httpClient.delete('http://localhost:8089/SpringMVC/api/deleteTransaction/'+idTransaction)
  }


  updateTransaction(idTransaction:any, Transaction:Transactions):Observable<Object>{
    return this.httpClient.put<Transactions>('http://localhost:8089/SpringMVC/api/modify-Transaction/'+idTransaction, Transaction)
    
    
    
    }
   



    getTransactionbyid(idTransaction:any ):Observable<Transactions>{
      return this.httpClient.get<Transactions>('http://localhost:8089/SpringMVC/api/getTransactionby/'+idTransaction)
    }
    



    addTransaction(transaction: any, headers: HttpHeaders): Observable<any> {
      const options = { headers: headers };
      return this.httpClient.post<any>('http://localhost:8089/SpringMVC/api/addTransaction/', transaction, options);
    }
    
}

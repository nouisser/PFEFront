import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Transactions } from '../Transactions';
import { TransactionServiceService } from '../transaction-service.service';

@Component({
  selector: 'app-sales-by-month',
  templateUrl: './sales-by-month.component.html',
  styleUrls: ['./sales-by-month.component.scss']
})

export class SalesByMonthComponent implements OnInit {

  lineChartData: ChartDataSets[] = [ { data: [] },

  ];
  
  lineChartLabels: any[] = [];
  lineChartOptions: ChartOptions = {
    responsive: true,
  };
  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,54,0,0.28)',
    },
  ];
  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType: ChartType = 'line';  
  montant:any [];
  labels :any = [];
    datetransaction :any = [];
  public typeData: Array<Transactions> = [];

  constructor(private taskService: TransactionServiceService) { }

  ngOnInit(): void {
    this.getTransactions();
  }


  
  getTransactions() {
    
      this.lineChartLabels = [];
      this.lineChartData = [];
      this.montant = [];
      this.labels = [];
      this.datetransaction = [];
      this.taskService.getTransactions().subscribe(
        (d) => {
          console.log(d);
          d.forEach((typeCount:Transactions) => {
            console.log(typeCount.datetransaction);
            console.log(typeCount.idTransaction);
            this.montant.push(typeCount.montant);
            //this.labels.push(typeCount.result.toString());
            this.datetransaction.push(typeCount.datetransaction);

          });
          this.lineChartData=[{ data: this.montant, label: 'transactions' }];

           // this.lineChartData.push(typeCount.surname);
            this.lineChartLabels=this.datetransaction;
        },
        (error) => {
          console.error(error);
        }
      );
    }
  
  }
import { Component, OnInit } from '@angular/core';
import { TransactionServiceService } from '../transaction-service.service';
import { ITypePercentage } from '../Transaction.interface';
import {  SingleDataSet } from 'ng2-charts';
import { Color, Label } from 'ng2-charts';
import { ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-sales-by-category',
  templateUrl: './sales-by-category.component.html',
  styleUrls: ['./sales-by-category.component.scss']
})
export class SalesByCategoryComponent implements OnInit {
  public doughnutChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: true,
    },
    cutoutPercentage: 10,
  };
  
  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: SingleDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartColors: Color[] = [
    {
      backgroundColor: ['#f68059', '#ffbf3a', '#4e3dc8'],
    },
  ];
  
  public typeData: Array<ITypePercentage> = [];
  constructor(private taskService:TransactionServiceService) { }

  ngOnInit(): void {
    this.getTypePercentage();
  }

  getTypePercentage() {
    this.doughnutChartData = [];
    this.doughnutChartLabels = [];
    this.taskService.getTypePercentage().subscribe(
      (d) => {
        // console.log(d);
        d.forEach((typeCount: ITypePercentage) => {
          console.log(typeCount.count);
          console.log(typeCount.result);
          this.doughnutChartData.push(typeCount.count);
          this.doughnutChartLabels.push(typeCount.result);
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
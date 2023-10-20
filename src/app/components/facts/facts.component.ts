import { Component } from '@angular/core';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.scss']
})
export class FactsComponent {
//this is a variable that hold number
projectcount:number = 0;
//same process
accuratecount:number = 0;
clientcount:number = 0;
customerfeedback:number = 0;

//we have created setinterval function with arrow function and
//and set them in a variable that is projectcountstop.
projectcountstop:any = setInterval(()=>{
  this.projectcount++;
  //we need to stop this at  particular point; will use if condition
  if(this.projectcount ==1234)
  {
    //clearinterval will stop tha function
    clearInterval(this.projectcountstop);
  }

},10) //10 is milisecond you can control it


accuratecountstop:any = setInterval(()=>{
  this.accuratecount++;
  if(this.accuratecount == 1234)
  {
    
    clearInterval(this.accuratecountstop);
  }
},10) 


clientcountstop:any = setInterval(()=>{
  this.clientcount++;
  if(this.clientcount == 1234)
  {
    
    clearInterval(this.clientcountstop);
  }
},10)

customerfeedbackstop:any = setInterval(()=>{
  this.customerfeedback++;
  if(this.customerfeedback == 1234)
  {
    
    clearInterval(this.customerfeedbackstop);
  }
},10)

//conclusion: we have use
//string interpolation
//setInterval function
//()=> arrow function
//clearInterval 
//creating variable
}

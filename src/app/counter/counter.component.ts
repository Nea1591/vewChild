import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
count:number =0;
message:string;
  constructor() { }

  ngOnInit() {
  }

increase(){
  this.count =this.count+1;
  this.message = "counter :"+this.count;
}

decrease(){
this.count=this.count-1;
this.message = "counter :"+this.count;
}



}

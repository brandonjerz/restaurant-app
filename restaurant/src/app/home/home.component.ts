import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  map: number = 1;
  imageUrlArray: string[] = [
  "http://sugardalefoods.com/sites/default/files/stuffed%20crust%20pizza.jpg",
  "http://doughboyspizza.com/wp-content/uploads/2017/07/VB-DOUGH-BOYS-SLICE-DC-011.jpg",
  "http://doughboyspizza.com/wp-content/uploads/2017/09/VB_DoughBoys4750.jpg",

];
  constructor() { }

  ngOnInit() {
  }
  swapLocation(locationId: number){
    this.map = locationId;
  }
}

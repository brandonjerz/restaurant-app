import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imageUrlArray: string[] = [
  "http://sugardalefoods.com/sites/default/files/stuffed%20crust%20pizza.jpg",
  "http://doughboyspizza.com/wp-content/uploads/2017/07/VB-DOUGH-BOYS-SLICE-DC-011.jpg",
  "http://doughboyspizza.com/wp-content/uploads/2017/09/VB_DoughBoys4750.jpg",

];
  constructor() { }

  ngOnInit() {
  }

}

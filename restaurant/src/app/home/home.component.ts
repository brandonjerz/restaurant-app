import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HomeMenuItem } from '../home-menu-item';
import { AuthService } from '../auth.service';
import { User } from '../user';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  map: number = 1;
  user: User;

  imageUrlArray: string[] = [
  "http://sugardalefoods.com/sites/default/files/stuffed%20crust%20pizza.jpg",
  "http://doughboyspizza.com/wp-content/uploads/2017/07/VB-DOUGH-BOYS-SLICE-DC-011.jpg",
  "http://doughboyspizza.com/wp-content/uploads/2017/09/VB_DoughBoys4750.jpg",

];
menuItems: HomeMenuItem[] = [
{name: "STARTERS", accentText: "TO SHARE!", description:"show", sizes:['sm','med','lg'], prices:[10,20,30], imgUrl: "https://doughboyspizza.com/wp-content/uploads/2016/09/wings.jpg"},   
{name: "SALADS", accentText: "GO GREENER!", description:"desc", sizes:['sm','med','lg'], prices:[10,20,30], imgUrl: "https://doughboyspizza.com/wp-content/uploads/2016/09/chef-salad-db.jpg"},  
{name: "SUBS & GYROS", accentText: "ENJOY!", description:"show", sizes:['sm','med','lg'], prices:[10,20,30], imgUrl: "https://doughboyspizza.com/wp-content/uploads/2016/09/gyros.jpg"},  
{name: "PASTA", accentText: "MOMMA MIA!", description:"desc", sizes:['sm','med','lg'], prices:[10,20,30], imgUrl: "https://doughboyspizza.com/wp-content/uploads/2016/09/db-spaghetti.jpg"},  
{name: "PIZZA", accentText: "CLASSIC", description:"show", sizes:['sm','med','lg'], prices:[10,20,30], imgUrl: "https://doughboyspizza.com/wp-content/uploads/2016/09/db-pizza.jpg"},  
{name: "KID'S MEALS", accentText: "FOR THE KIDS", description:"desc", sizes:['sm','med','lg'], prices:[10,20,30], imgUrl: "https://doughboyspizza.com/wp-content/uploads/2016/09/chicken-tenders.jpg"}, 
{name: "CALZONES", accentText: "TO SHARE!", description:"show", sizes:['sm','med','lg'], prices:[10,20,30], imgUrl: "https://doughboyspizza.com/wp-content/uploads/2016/09/calzone.jpg"},
{name: "BURGERS", accentText: "CLASSIC", description:"show", sizes:['sm','med','lg'], prices:[10,20,30], imgUrl: "https://doughboyspizza.com/wp-content/uploads/2016/09/burger.jpg"},
{name: "COCKTAILS", accentText: "ADULTS", description:"show", sizes:['sm','med','lg'], prices:[10,20,30], imgUrl: "https://doughboyspizza.com/wp-content/uploads/2016/09/cocktails.jpg"},
];
  constructor(public auth: AuthService){

  }

  ngOnInit() {
    this.auth.user.subscribe(user =>{
      this.user = user;
    });

  }
  swapLocation(locationId: number){
    this.map = locationId;
  }
}

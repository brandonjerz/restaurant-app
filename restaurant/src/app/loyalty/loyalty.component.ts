import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-loyalty',
  templateUrl: './loyalty.component.html',
  styleUrls: ['./loyalty.component.scss']
})
export class LoyaltyComponent implements OnInit {
  user: User;
  priceField: number;
  redeemPriceField: number;
  pointsToEarn: number = 0;
  pointsToRedeem: number;
  reducedPrice: number;
  constructor(public auth: AuthService) { 
    this.pointsToEarn = 0;
  }
  
  ngOnInit() {
    this.auth.user.subscribe(user =>{
      this.user = user;
    });
  }
  addPts(){
    this.auth.editPts(this.user, this.pointsToEarn);
  }
  removePts(){
    this.auth.editPts(this.user, this.pointsToRedeem - 2*this.pointsToRedeem);
  }
  calculatePoints(){
    this.pointsToEarn = this.priceField / 10
  }
  calculatePrice(){
    this.reducedPrice = this.redeemPriceField - this.pointsToRedeem;
  }

}

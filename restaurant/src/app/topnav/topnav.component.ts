import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {
  mobileView: boolean = false;
  hamClosed: boolean = true;
  hamIcon: string = "menu"
  innerWidth: number;
  constructor() { }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.checkForMobile();
  }
  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.checkForMobile();
  }
  toggleHam(){
    this.hamClosed = !this.hamClosed;
    this.hamIcon = this.hamClosed ? "menu" : "close";
  }
  checkForMobile(){
    if(this.innerWidth < 768){
      this.mobileView = true;
    }
    else{
      this.mobileView = false;
      this.hamClosed = true;
    }
  }

}

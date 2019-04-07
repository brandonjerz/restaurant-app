import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';

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
  stickyPhoneAll: boolean = false;
  user: User;
  showSignIn: boolean = true;
  constructor(public auth: AuthService, private dialog: MatDialog) { }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.checkForMobile();
  }


  ngOnInit() {
    this.auth.user.subscribe(user => this.user = user);
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
  togglePhoneNums(){
    this.stickyPhoneAll = !this.stickyPhoneAll;
  }
  signOut(){
    this.auth.signOut();
  }
  signIn(){
    this.showSignIn = false;
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = "380px";
    dialogConfig.width ="450px";
    


    this.dialog.open(LoginComponent, dialogConfig);
    this.dialog.afterAllClosed.subscribe(evt =>{
      this.showSignIn = true;
    })
  }

}

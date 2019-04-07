import { Component, OnInit } from '@angular/core';
import { AuthService } from '../app/auth.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { LoginComponent } from './login/login.component';
declare var device: any;
declare var cordova: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'restaurant';
  public base64Image : String;
  public photos;
  public text;
  constructor(public auth: AuthService){

  }
  ngOnInit(){

    document.addEventListener('deviceready', function() { 
      alert(device.platform); 
      console.log("HERE");
      this.alert = "HERE";
      }, false); 


      
  }
  
  takePic(){
    cordova.plugins.camera.getPicture({
      destinationType: cordova.plugins.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000
  }).then((imageData) => {
    // imageData is a base64 encoded string
      this.base64Image = "data:image/jpeg;base64," + imageData;
  }, (err) => {
      console.log(err);
  });
  }
}
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

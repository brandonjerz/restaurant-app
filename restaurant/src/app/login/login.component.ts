import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailFG: FormGroup;
  accountExists: boolean;
  authFailed: boolean;
  noAccount: boolean;
  loginSuccessful: boolean = false;
  signUpSuccessful: boolean = false
  reset: boolean = false;
  resetMsg: string;
  resetSubmitted: boolean = false;
  
  constructor(private auth: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.emailFG = this.formBuilder.group({
      emailForm: ['', Validators.compose([Validators.required, Validators.email])],
      passForm: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    })
  }
  checkFormError(): boolean{
    if(this.emailFG.controls.emailForm.invalid || this.emailFG.controls.passForm.invalid){
      return true;
    }
    else{
      return false;
    }
  }
  signIn(){
    if(!this.checkFormError()){
    
      let si = this.auth.signIn(this.emailFG.controls.emailForm.value, this.emailFG.controls.passForm.value);
      si.then(th =>{
        this.accountExists = false;
        if(th == undefined){
          this.loginSuccessful = true;
        }
        else{
          if(th.code.includes("auth/wrong-password")){
            this.authFailed = true;
            this.accountExists = false;
            this.noAccount = false;
          }
          else if(th.code.includes("auth/user-not-found")){
            this.accountExists = false;
            this.authFailed = false;
            this.noAccount = true;
          }
          else{
            console.log("close dialog")
          }
        }
        
      })
      si.catch(err => {
        console.log("here2");
        console.log(err);
      })
    }
    
  }
  signUp(email, pass){
    let ex;
    if(!this.checkFormError()){
    
    let su = this.auth.emailSignUp(this.emailFG.controls.emailForm.value, this.emailFG.controls.passForm.value);
    su.then(th => {
      this.accountExists = false;
      this.noAccount = false;
      this.authFailed = false;
      this.signUpSuccessful = true;
    })
    su.catch(err => {
      if(err.code.includes("auth/email-already-in-use")){
        this.authFailed = false
        this.noAccount = false;
        this.accountExists = true;

      }
      else{
        this.accountExists = false;
        this.signUpSuccessful = true;
      }
    })
  

    

  
    }
  }
  toggleReset(){
    this.reset = !this.reset;
  }
  resetPassword(){
    
    this.resetMsg = this.auth.resetPassword(this.emailFG.controls.emailForm.value);
    this.resetSubmitted = true;
  }

}

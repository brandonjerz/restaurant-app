import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable, of } from 'rxjs';
import {switchMap} from 'rxjs/operators'
import {User} from './user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  wrongPass: boolean = false;
  accountExists: boolean = false;
  user: Observable<User>;
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
  ) { 
    this.user = this.afAuth.authState
    .pipe(
      switchMap(user => {
        if(user){
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
        }
        else{
          return of(null)
        }
      })
    )

  }

//EMAIL AUTH

private handleError(error){
  console.error(error);
}

private setUserDoc(user){
  const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

  const data : User = {

    uid: user.uid,
    email: user.email,
    rewardPoints: "0",
    roles: {
      subscriber: true,
      admin: true
    }

  }
  return userRef.set(data, { merge: true });

}
emailSignUp(email: string, password: string){
  return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then(user =>{
      return this.setUserDoc(user)
    })


}


updateUser(user: User, data: any){
  return this.afs.doc(`users/${user.uid}`).set(data)
}
//



  // googleLogin(){
  //   const provider = new firebase.auth.GoogleAuthProvider();
  //   return this.oAuthLogin(provider);
  // }

  signIn(email, pass){
    return this.afAuth.auth.signInWithEmailAndPassword(email, pass)
    .then((credential) =>{
      this.updateUserData(credential.user);
    })
    .catch(function(err){
      return err;
    })
  }

  signOut(){
    this.afAuth.auth.signOut();
  }
  public resetPassword(email: string): string{
    this.afAuth.auth.sendPasswordResetEmail(email).then(function() {
      // Email sent.
      return "Thank you! If this account exists in our system you will receive an email with password reset instructions."
    }).catch(function(error) {
      // An error happened.
      return "ERROR";
    });
    return "error";
  }

  public checkAccountExists(){
    return this.accountExists;
  }

  // private authLogin(provider){
  //   return this.afAuth.auth.signInWithPopup(provider)
  //     .then((credential) => {
  //       this.updateUserData(credential.user)
  //     });
  // }
  public editPts(user: User, ptChange: number){
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`)
    const data: User= {
      uid: user.uid,
      email: user.email,
      photoURL: user.photoURL,
      displayName: user.displayName,
      rewardPoints: "0",
      roles: {
        subscriber: true
      }
    }
    userRef.set(data, { merge: true })
  }

  private updateUserData(user){
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`)
    const data: User= {
      uid: user.uid,
      email: user.email,
      photoURL: user.photoURL,
      displayName: user.displayName,
      rewardPoints: "something",
      roles: {
        subscriber: true
      }
    }

    
    return userRef.set(data, { merge: true });
  }

  canRead(user: User): boolean{
    const allowed = ['admin', 'editor', 'subscriber']
    return this.checkAuthorization(user, allowed);
  }
  canEdit(user: User): boolean{
    const allowed = ['admin', 'editor']
    return this.checkAuthorization(user, allowed);
  }
  canDelete(user: User): boolean{
    const allowed = ['admin']
    return this.checkAuthorization(user, allowed);
  }

  private checkAuthorization(user: User, allowedRoles: string[]): boolean{
      if(!user) return false
      for (const role of allowedRoles){
        if( user.roles[role]){
          return true;
        }
      }
      return false;
  }
}

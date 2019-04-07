import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MenuItem } from '../menu-item';
import { getOrCreateChangeDetectorRef } from '@angular/core/src/render3/di';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore'
import {Observable, BehaviorSubject} from 'rxjs';
import {map} from 'rxjs/operators'



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  // menuItems: MenuItem[] = [ 
  //   {name: 'Cheesy Breadsticks', description: 'This is where a description will go it is a good place to write a brief overview of what the menu item consists of.' },
  //   {name: 'Paremesan Spinach and Artichoke Dip', description: 'This is where a description will go it is a good place to write a brief overview of what the menu item consists of.' },
  //   {name: 'Onion Rings', description: 'This is where a description will go it is a good place to write a brief overview of what the menu item consists of.' },
  //   {name: 'Mozzarella Sticks', description: 'This is where a description will go it is a good place to write a brief overview of what the menu item consists of.' },
  //   {name: 'Chicken Tenders', description: 'This is where a description will go it is a good place to write a brief overview of what the menu item consists of.' },
  //   {name: 'Fries', description: 'This is where a description will go it is a good place to write a brief overview of what the menu item consists of.' },
  //   {name: 'Caesar Salad', description: 'This is where a description will go it is a good place to write a brief overview of what the menu item consists of.' },
  //   {name: 'Greek Salad', description: 'This is where a description will go it is a good place to write a brief overview of what the menu item consists of.' },
  //   {name: 'Wings', description: 'This is where a description will go it is a good place to write a brief overview of what the menu item consists of.' },
  //   {name: 'Chef\'s Salad', description: 'This is where a description will go it is a good place to write a brief overview of what the menu item consists of.' },
  //   {name: 'Antipasto Salad', description: 'This is where a description will go it is a good place to write a brief overview of what the menu item consists of.' },
  //   {name: 'Chicken Parm Sub', description: 'This is where a description will go it is a good place to write a brief overview of what the menu item consists of.' },
  //   {name: 'Buffalo Chicken Sub', description: 'This is where a description will go it is a good place to write a brief overview of what the menu item consists of.' },
  //   {name: 'Italian Combo Sub', description: 'This is where a description will go it is a good place to write a brief overview of what the menu item consists of.' },
  //   {name: 'Tailgater', description: 'This is where a description will go it is a good place to write a brief overview of what the menu item consists of.' },
  //   {name: 'Ham and Cheese', description: 'This is where a description will go it is a good place to write a brief overview of what the menu item consists of.' },
  //   {name: 'Penne Alfredo with Spinach', description: 'This is where a description will go it is a good place to write a brief overview of what the menu item consists of.' },
  //   {name: 'Philly Cheesesteak', description: 'This is where a description will go it is a good place to write a brief overview of what the menu item consists of.' },
  //   {name: 'Lasagna', description: 'This is where a description will go it is a good place to write a brief overview of what the menu item consists of.' },
  //   {name: 'Meat Lover\'s Calzone', description: 'This is where a description will go it is a good place to write a brief overview of what the menu item consists of.' },
  //   {name: 'Original or Pan Style Pizza', description: 'This is where a description will go it is a good place to write a brief overview of what the menu item consists of.' },
  //   {name: 'Buffalo Pizza', description: 'This is where a description will go it is a good place to write a brief overview of what the menu item consists of.' },
  //   {name: 'Meatball and Cheese', description: 'This is where a description will go it is a good place to write a brief overview of what the menu item consists of.' }
  // ];
  
  menuItemsCollection: AngularFirestoreCollection<MenuItem>;
  menuItems: Observable<MenuItem[]>
  shownMenuItems: MenuItem[];
  allMenuItems: MenuItem[];
  selectedCat: string = "init";
  snapshot: any;
  myObserver = {
    next: x => {this.shownMenuItems = x; this.allMenuItems = x},
    error: err => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
  };
  // noteDoc: AngularFirestoreDocument<Note>;
  // note: Observable<Note>

  newContent: string;
  
  constructor(private afs: AngularFirestore, private _ckRef: ChangeDetectorRef) {
   }

  ngOnInit() {
    // this.notesCollection = this.afs.collection('menuItems', ref => {
    //   return ref.where('hearts', '>=', 5)
    // });
    this.menuItemsCollection = this.afs.collection('menuItems');
    this.menuItems  = this.menuItemsCollection.valueChanges();
    this.menuItems.subscribe(this.myObserver);
    setTimeout(() => {
      document.getElementById("firstCatButton").click();
      
    }, 2000);
    
    // this.snapshot = this.notesCollection.snapshotChanges()
    //   .subscribe(arr => console.log(arr))

  }

  filterOn(ct: string){
    this.selectedCat = ct;
    this.shownMenuItems = this.allMenuItems.filter(x => x.category === ct);
    this._ckRef.detectChanges();
    console.log("space");

    }

 

}

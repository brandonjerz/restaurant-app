import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MenuItem } from '../menu-item';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore'
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators'
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.scss']
})
export class AdminSettingsComponent implements OnInit {
  
  menuItemsCollection: AngularFirestoreCollection<MenuItem>;
  menuItems: Observable<any[]>;
  menuItemDoc: AngularFirestoreDocument<MenuItem>;
  categoryForm = new FormControl('');
  nameForm = new FormControl('');
  descriptionForm = new FormControl('');
  pricesForm = new FormControl('');
  sizesForm = new FormControl('');
  constructor(private afs: AngularFirestore) { }

  
  ngOnInit() {
    this.menuItemsCollection = this.afs.collection('menuItems', ref => ref.orderBy('name'))
    // this.menuItems  = this.menuItemsCollection.valueChanges();
    this.menuItems = this.afs.collection('menuItems', ref => ref.orderBy('name', 'asc')).snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(doc => {
              return{
                  id: doc.payload.doc.id,
                  data: doc.payload.doc.data()
              }
          })
      })
      )
  }
  addMenuItem(){
    let newItem: MenuItem = 
    {
      category: this.categoryForm.value,
      name: this.nameForm.value,
      description: this.descriptionForm.value,
      prices: this.pricesForm.value.split(','),
      sizes: this.sizesForm.value.split(',')
    }
    this.menuItemsCollection.add(newItem);
  }
  deleteItem(itemId){
    this.menuItemDoc = this.afs.doc(`menuItems/${itemId}`);
    this.menuItemDoc.delete();
  }



}

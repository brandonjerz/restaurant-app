import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule, 
  MatCheckboxModule, 
  MatToolbarModule,
  MatFormFieldModule,
  MatCardModule,
  MatInput,
  MatInputModule,
  MatSidenavModule,
  MatListModule,
  MatOptionModule,
  MatSelectModule,
  MatDialogModule
} from '@angular/material';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { TopnavComponent } from './topnav/topnav.component';
import { MenuComponent } from './menu/menu.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import { HomeMenuItemComponent } from './home-menu-item/home-menu-item.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { AuthService } from './auth.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { LoginComponent } from './login/login.component';
import { LoyaltyComponent } from './loyalty/loyalty.component';
export const firebaseConfig = environment.firebaseConfig;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopnavComponent,
    MenuComponent,
    HomeMenuItemComponent,
    MenuItemComponent,
    AdminSettingsComponent,
    LoginComponent,
    LoyaltyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatOptionModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonToggleModule,
    SlideshowModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent]
})
export class AppModule { }

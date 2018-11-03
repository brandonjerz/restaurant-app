import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  MatListModule
} from '@angular/material';
import { TopnavComponent } from './topnav/topnav.component';
import { MenuComponent } from './menu/menu.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import { HomeMenuItemComponent } from './home-menu-item/home-menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopnavComponent,
    MenuComponent,
    HomeMenuItemComponent
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
    SlideshowModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

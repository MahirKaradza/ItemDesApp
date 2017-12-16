import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { ItemService } from './item.service';

import { AppComponent } from './app.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemsComponent } from './items/items.component';
import { NavbarComponent } from './navbar/navbar.component';

const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
};
@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    ItemsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseConfig),

  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }

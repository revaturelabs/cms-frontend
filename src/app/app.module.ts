import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TagOperationsComponent } from './components/tag-operations/tag-operations.component';
<<<<<<< HEAD
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
=======
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyOwnCustomMaterialModule} from './material'

>>>>>>> 3e5c7b0ff1085560a83e468c31eee668c7f6a05f

@NgModule({
  declarations: [
    AppComponent,
    TagOperationsComponent,
    SidebarComponent,
    SearchbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
=======
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule
>>>>>>> 3e5c7b0ff1085560a83e468c31eee668c7f6a05f
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

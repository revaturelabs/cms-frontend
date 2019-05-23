import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TagOperationsComponent } from './components/tag-operations/tag-operations.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MyOwnCustomMaterialModule} from './material';
import {MatFormFieldModule, MatInputModule, MatMenuModule} from '@angular/material';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import {ResultComponent} from './components/result/result.component';
import { SearchPageComponent } from './components/search-page/search-page.component';


@NgModule({
  declarations: [
    AppComponent,
    TagOperationsComponent,
    NavbarComponent,
    ResultComponent,
    SearchbarComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
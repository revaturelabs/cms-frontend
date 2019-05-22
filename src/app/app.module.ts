import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TagOperationsComponent } from './components/tag-operations/tag-operations.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyOwnCustomMaterialModule} from './material';
import {MatFormFieldModule, MatInputModule, MatMenuModule} from '@angular/material';
import { CreateOperationsComponent } from './components/create-operations/create-operations.component';
import {NavbarComponent} from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    TagOperationsComponent,
    CreateOperationsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

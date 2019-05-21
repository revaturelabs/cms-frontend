import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TagOperationsComponent } from './components/tag-operations/tag-operations.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyOwnCustomMaterialModule} from './material'


@NgModule({
  declarations: [
    AppComponent,
    TagOperationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

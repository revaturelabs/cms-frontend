import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ResultComponent } from './result/result.component';
=======
import { TagOperationsComponent } from './components/tag-operations/tag-operations.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyOwnCustomMaterialModule} from './material';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import { CreateOperationsComponent } from './components/create-operations/create-operations.component';
>>>>>>> 619bc6c63e4d2cd61863d9423103f76c2eac4ba7


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
=======
    TagOperationsComponent,
    CreateOperationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    MatFormFieldModule,
    MatInputModule
>>>>>>> 619bc6c63e4d2cd61863d9423103f76c2eac4ba7
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TagOperationsComponent } from './components/tag-operations/tag-operations.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyOwnCustomMaterialModule} from './material';
import {MatFormFieldModule, MatInputModule,  MatToolbarModule, MatMenuModule, MatIconModule, MatStepperModule} from '@angular/material';
import {MatListModule} from '@angular/material/list'; 
import {MatTreeModule} from '@angular/material/tree';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ResultComponent } from './components/result/result.component';
import { ResultService } from './services/result.service';
import { SearchPageComponent } from './components/search-page/search-page.component';


@NgModule({
  declarations: [
    AppComponent,
    TagOperationsComponent,
    NavbarComponent,
    ResultComponent,
    SearchPageComponent,
    SearchbarComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule, 
    MatTreeModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatMenuModule
  ],
  providers: [ResultService],
  bootstrap: [AppComponent]
})
export class AppModule { }

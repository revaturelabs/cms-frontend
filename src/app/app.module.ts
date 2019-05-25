import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TagOperationsComponent } from './components/tag-operations/tag-operations.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule, MatInputModule, MatMenuModule, MatListModule, MatTreeModule, MatCardModule, MatIconModule, MatExpansionModule} from '@angular/material';
import {NavbarComponent} from './components/navbar/navbar.component';
import {ResultComponent} from './components/result/result.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ResultService } from './services/result.service';
import { MyOwnCustomMaterialModule } from './material';


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
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule, 
    MatTreeModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatMenuModule,
    MatToolbarModule,
    MatSelectModule,
    MyOwnCustomMaterialModule
  ],
  providers: [ResultService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { SidebarComponent } from './sidebar/sidebar.component';
=======
import { TagOperationsComponent } from './components/tag-operations/tag-operations.component';
>>>>>>> 68de09a4659a9e9b208b2fb1347168c2c8837949

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    SidebarComponent
=======
    TagOperationsComponent
>>>>>>> 68de09a4659a9e9b208b2fb1347168c2c8837949
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

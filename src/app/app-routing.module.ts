import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD

const routes: Routes = [];
=======
import {TagOperationsComponent} from './components/tag-operations/tag-operations.component';
import {CreateOperationsComponent} from './components/create-operations/create-operations.component';

const routes: Routes = [
  { path: 'tags', component: TagOperationsComponent },
  {path: 'create', component: CreateOperationsComponent}
];
>>>>>>> 619bc6c63e4d2cd61863d9423103f76c2eac4ba7

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

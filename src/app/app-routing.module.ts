import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TagOperationsComponent} from './components/tag-operations/tag-operations.component';
import {CreateOperationsComponent} from './components/create-operations/create-operations.component';

const routes: Routes = [
  { path: 'tags', component: TagOperationsComponent },
  {path: 'create', component: CreateOperationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

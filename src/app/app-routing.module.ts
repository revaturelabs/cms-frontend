import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TagOperationsComponent} from './components/tag-operations/tag-operations.component';

const routes: Routes = [
  { path: 'tags', component: TagOperationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

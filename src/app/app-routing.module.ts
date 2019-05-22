import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TagOperationsComponent} from './components/tag-operations/tag-operations.component';
import {CreateOperationsComponent} from './components/create-operations/create-operations.component';
import {ResultComponent} from './components/result/result.component';
const routes: Routes = [
  { path: 'tags', component: TagOperationsComponent },
  {path: 'create', component: CreateOperationsComponent},
  {path: 'result', component: ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

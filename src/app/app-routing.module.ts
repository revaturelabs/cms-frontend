import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TagOperationsComponent} from './components/tag-operations/tag-operations.component';
import {ResultComponent} from './components/result/result.component';
const routes: Routes = [
  { path: 'tags', component: TagOperationsComponent },
  {path: 'result', component: ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

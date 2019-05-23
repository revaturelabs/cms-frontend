import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TagOperationsComponent} from './components/tag-operations/tag-operations.component';
import {ResultComponent} from './components/result/result.component';
import { NavbarComponent} from './components/navbar/navbar.component';
import { SearchPageComponent} from './components/search-page/search-page.component';
const routes: Routes = [
  { path: 'tags', component: TagOperationsComponent },
  { path: 'result', component: ResultComponent},
  { path: 'navbar', component: NavbarComponent },
  { path: 'search', component: SearchPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

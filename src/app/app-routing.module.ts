import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*import { List1Component, List2Component, HomeComponent } from './index';*/

const routes: Routes = [
  /*{path: 'list1', component: List1Component},
  {path: 'list2', component: List2Component},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

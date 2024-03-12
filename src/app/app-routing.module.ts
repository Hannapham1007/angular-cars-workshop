import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListComponent } from './cars/list/list.component';
import { AddComponent } from './cars/add/add.component';
import { ViewComponent } from './cars/view/view.component';

const routes: Routes = [
  {path: "cars", component: ListComponent},
  {path: "cars/add", component: AddComponent},
  {path: "cars/:id", component: ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { ToDoPageComponent } from './pages/to-do-page/to-do-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'to-do', component: ToDoPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

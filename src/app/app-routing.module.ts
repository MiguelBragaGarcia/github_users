import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './search/dashboard/dashboard.component';
import { RepositoryComponent } from './search/repository/repository.component';

const routes: Routes = [
  {path:"", component:DashboardComponent},
  {path:":user/repos", component:RepositoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

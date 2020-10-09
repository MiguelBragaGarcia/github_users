import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { RepositoryComponent } from './repository/repository.component';




@NgModule({
  declarations: [DashboardComponent, RepositoryComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ]
})
export class SearchModule { }

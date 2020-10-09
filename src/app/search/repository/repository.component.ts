import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IRepository } from './IRepository';
import { RepositoryService } from './repository.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repositories: IRepository[] = []; 
  user = "";

  constructor(
    private repositoryService: RepositoryService,
    private activedRouter: ActivatedRoute
    ) { }

  ngOnInit(): void {
      const {user} = this.activedRouter.snapshot.params;
      this.user = user;

      this.repositoryService.findRepositories(user).subscribe(repositories =>{
          this.repositories = [...repositories]},
          (error)=> console.error(error.message));
  }

}

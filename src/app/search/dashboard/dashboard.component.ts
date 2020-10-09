import { Component, OnInit } from '@angular/core';
import { FindUserService } from './findUser.service';
import { IFindUser } from './IFindUser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userInput ="";
  users: IFindUser[]= []

  constructor(
    private findUserService: FindUserService

  ) { }

  ngOnInit(): void {
    const users = localStorage.getItem("user");

    if (users){
      this.users=JSON.parse(users);
    }
  }

  handleInputUser(input:string):void {
    this.userInput = input;
  }

  handleSearch():void {
    if (this.userInput === "") {
      return;
    }

    const hasUser  = this.users.find(user => user.login === this.userInput);

    if (hasUser) {
      return;
    }

    this.findUserService.findUser(this.userInput).subscribe(user => { 
      this.users.push(user);
      localStorage.setItem("user", JSON.stringify(this.users));
      this.userInput="";
    }, error => {
      console.error(error.message)
      this.userInput="";
    })

  }

}

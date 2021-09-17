import { Component, OnInit } from '@angular/core';
import { fade } from '../Object/MyAnimation';
import { User } from '../Object/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'], animations: [fade]
})
export class UserComponent implements OnInit {

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }
  username: string = "";
  password: string = "";
  confPass: string = "";
  num: number = 0;
  selectedUser!: User;
  Users!: User[];
  action: string = "Submit";
  search!: string;

  getUser() {
    this.UserService.GetAll().subscribe((res) => {
      this.Users = res;
    },
      (err) => {

      });
  }

  Action(i: any) {
    if (this.num == 0) {
      const it = new User(this.username, this.password);
      this.UserService.AddUser(it).subscribe((res) => {
        this.Users = res;
        alert("New Record added successfuly");
        i.reset();
      })
    }
    else {
      this.selectedUser.emailu = this.username;
      this.selectedUser.password = this.password;
      this.UserService.EditUser(this.selectedUser).subscribe((res) => {
        this.Users = res;
        alert("Record updated successfuly");
        this.num = 0;
        this.action = "Submit";
        i.reset();
      },
        (err) => {

        }
      )
    }
  }

  OnSelect(it: User) {
    this.num = 1;
    this.selectedUser = it;
    this.action = "Edit";
    this.username = this.selectedUser.emailu;
  }

  Delete(it: User) {

  }
}

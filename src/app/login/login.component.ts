import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Object/User';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private Auth: AuthService, private router: Router, private UserService: UserService) { }
  ngOnInit(): void {
    this.getUser()
  }
  emailu: string = "";
  password: string = "";
  token!: string;
  error!: string;
  Users!: User[];
  num = 0;
  wrongEmail: boolean = false;
  wrongMdp: boolean = false;

  checkUser() {
    let result = this.Users.find((item) => {
      return this.emailu == item.emailu;
    });
    if (!result) {
      return this.wrongEmail = true;
    }
    return this.wrongEmail = false;
  }

  Login(i: any) {
    this.Auth.login(this.emailu, this.password).subscribe((res) => {
      this.token = res;
      localStorage.setItem('token', this.token);
      i.reset();
      this.router.navigate(['/Menu']);
    },
      (err) => {
        this.error = err.text;
        if (this.error == "Mot de passe incorrect") {
          alert("Wrong password");
          this.wrongMdp= true;
        }
      }
    );
  }

  getUser() {
    this.UserService.GetAll().subscribe((res: User[]) => {
      this.Users = res;
      for (let it of this.Users) {
        this.num = this.num + 1;
      }
    });
  }

  Register(a: any) {
    const MyUser = new User(this.emailu, this.password);
    this.UserService.Registration(MyUser).subscribe((res) => {
      this.token = res;
      a.reset();
      localStorage.setItem('token', this.token);
      this.router.navigate(['/Menu']);
    });
  }
}

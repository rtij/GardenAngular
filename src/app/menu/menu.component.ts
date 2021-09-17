import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private Auth:AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.Auth.getLogout().subscribe((res)=>{
      localStorage.removeItem('token');
      this.router.navigate(['login']);
  
    },
    (err)=>{
      alert(err.error)
    }
    );
  }
}

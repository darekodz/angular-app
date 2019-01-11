import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(public authService: AuthService) {
   }

  ngOnInit() {
  }

  logIn(value){
    this.authService.logIn(value);
  }

  logOut() {
    this.authService.logOut();
  }

}

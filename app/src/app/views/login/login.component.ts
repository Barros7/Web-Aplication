import { Component, OnInit } from '@angular/core';
import { RequestLogin } from 'src/app/resources/models/login/RequestLogin';
import { LoginService } from 'src/app/resources/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public requestLogin!: RequestLogin;

  constructor( private loginService: LoginService) { }

  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
  }

  public doLogin() :void {
    this.loginService.doLogin(this.requestLogin).subscribe((data)=>{
      console.log(data);
      },
      (error) =>{
        console.error(error);
      }
    );
  }
}

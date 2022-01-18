import { Component, OnInit } from '@angular/core';
import { RequestLogin } from 'src/app/resources/models/login/RequestLogin';
import { ResponseLogin } from 'src/app/resources/models/login/ResponseLogin';
import { AlertService } from 'src/app/resources/services/alert/alert.service';
import { LoginService } from 'src/app/resources/services/login/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public requestLogin!: RequestLogin;

  constructor( 
    private loginService: LoginService, 
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
  }

  public doLogin() :void {
    this.loginService.doLogin(this.requestLogin).subscribe((data)=>{
      this.router.navigate(['buy']);
      },
      (httpError) =>{
        this.alertService.error(httpError, httpError.error.message);
        console.error(httpError);
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { RequestRegister } from 'src/app/resources/models/register/RequestRegister';
import { ResponseRegister } from 'src/app/resources/models/register/ResponseRegister';
import { AlertService } from 'src/app/resources/services/alert/alert.service';
import { RegisterService } from 'src/app/resources/services/register/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public requestRegister!: RequestRegister;

  constructor(
    private registerService: RegisterService,
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.requestRegister = new RequestRegister();
  }

  public doRegister() :void{
    this.registerService.doRegister(this.requestRegister).subscribe((data)=>{
      this.router.navigate(['']);
    },
    (httpError) =>{
      this.alertService.error(httpError, httpError.error.msg);
      //console.error(httpError);
    }
    )
  }
}
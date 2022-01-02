import { Component, OnInit } from '@angular/core';
import { RequestRegister } from 'src/app/resources/models/register/RequestRegister';
import { ResponseRegister } from 'src/app/resources/models/register/ResponseRegister';
import { RegisterService } from 'src/app/resources/services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  public requestRegister!: RequestRegister;

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
    this.requestRegister = new RequestRegister();
  }

  public doRegister() :void{
    this.registerService.doRegister(this.requestRegister).subscribe((data)=>{
      console.log(data);
    },
    (error) =>{
      console.error(error);
    }
    )
  }

}

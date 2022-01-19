import { Component, OnInit } from '@angular/core';
import { RequestVenda } from 'src/app/resources/models/venda/RequestVenda';
//import { ResponseVenda } from 'src/app/resources/models/venda/ResponseVenda';
import { AlertService } from 'src/app/resources/services/alert/alert.service';
import { VendaService } from 'src/app/resources/services/venda/venda.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css']
})
export class VendaComponent implements OnInit {

  public requestVenda!: RequestVenda;

  constructor(
    private VendaService: VendaService,
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.requestVenda = new RequestVenda();
  }

  public doVenda() :void{
    this.VendaService.doVenda(this.requestVenda).subscribe((data)=>{
      this.router.navigate(['']);
    },
    (httpError) =>{
      this.alertService.error(httpError, httpError.error.msg);
      //console.error(httpError);
    }
    )
  }
}

import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  public success(
    msg: string, 
    title: string
  ): void {
    this.showAlert(title, msg, 'success');
  }

  public info(
    msg: string, 
    title: string
  ): void {
    this.showAlert(title, msg, 'info');
  }

  public error(
    msg: string, 
    title: string
  ): void {
    this.showAlert(title, msg, 'error');
  }

  private showAlert(
    title: string, 
    msg: string, 
    icon: SweetAlertIcon
  ): void{
    Swal.fire(title, msg, icon);
  }
}
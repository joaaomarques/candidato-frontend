import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal/alert-modal.component';


enum AlertTypes {
  DANGER = 'danger',
  SUCCESS= 'success'
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  constructor(private bsModalService:BsModalService ) { }

  private showAlert(message:string, type:AlertTypes){
    const bsModalRef: BsModalRef = this.bsModalService.show(AlertModalComponent);

    bsModalRef.content.type = type;
    bsModalRef.content.message = message;
  }

  showAlertDanger(message: string) {
    this.showAlert(message, AlertTypes.DANGER)
  }

  showAlertSuccess(message: string) {

    this.showAlert(message, AlertTypes.SUCCESS)
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrl: './alert-modal.component.css'
})
export class AlertModalComponent implements OnInit  {

 @Input() message:string="";
 @Input() type:string="";

  constructor(public bsModalRef:BsModalRef){}

  ngOnInit(): void {

  }

  onClose(){
    this.bsModalRef.hide();
  }

}

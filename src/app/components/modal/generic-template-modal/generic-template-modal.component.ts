import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-generic-template-modal',
  templateUrl: './generic-template-modal.component.html',
  styleUrls: ['./generic-template-modal.component.scss']
})
export class GenericTemplateModalComponent implements OnInit {

  @Input("title") title;


  @Output("onOk") $okEvent = new EventEmitter();

  constructor(
    private dialogRef: MatDialogRef<any>
  ) {

  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
}

ok(){
  this.$okEvent.emit("")
}
}


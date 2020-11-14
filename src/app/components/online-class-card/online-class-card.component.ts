import { catchError } from 'rxjs/operators';
import { GenericTemplateModalComponent } from './../modal/generic-template-modal/generic-template-modal.component';
import { Component, Input, OnInit } from '@angular/core';
import { AvailableCourse } from 'src/app/model/available.course.model';
import { OnlineClassHttpService } from 'src/app/services/http/online-class-http.service';
import { GenericErrorHandlerService } from 'src/app/services/errors/generic-error-handler.service';
import { SimpleToastService } from 'src/app/services/notifications/simple-toast.service';

@Component({
  selector: 'app-online-class-card',
  templateUrl: './online-class-card.component.html',
  styleUrls: ['./online-class-card.component.scss']
})
export class OnlineClassCardComponent implements OnInit {

  @Input("onlineClass") onlineClass: AvailableCourse;

  constructor(
    private _onlineClassHttp: OnlineClassHttpService,
    private _httpError: GenericErrorHandlerService,
    private _notifyToast: SimpleToastService
  ) { }

  ngOnInit(): void {

  }

  openClass() {
    this._openClass().subscribe((resp) => {
      if (resp) {
        this.onlineClass.classStatus = "OPEN";
        this._notifyToast.showToast({
          message: "Class opened Successfully"
        })
      }
    })
  }

  closeClass() {
    this._closeClass().subscribe((resp) => {
      if (resp) {
        this.onlineClass.classStatus = "CLOSED";
        this._notifyToast.showToast({
          message: "Class closed Successfully"
        })
      }
    })
  }

  private _openClass() {
    return this._onlineClassHttp.openClass(this.onlineClass.classId)
      .pipe(catchError(this._httpError.showeHttpToastError(false)));
  }

  private _closeClass() {
    return this._onlineClassHttp.closeClass(this.onlineClass.classId)
      .pipe(catchError(this._httpError.showeHttpToastError(false)));

  }
}

import { OnlineClassHttpService } from 'src/app/services/http/online-class-http.service';
import { GenericErrorHandlerService } from 'src/app/services/errors/generic-error-handler.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { EntityLookupModel } from 'src/app/model/entity-lookup.model';
import { Component, OnInit, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CreateOnlineClassModalComponent } from '../create-online-class-modal/create-online-class-modal.component';
import { StudentHttpService } from 'src/app/services/http/student-http.service';
import { catchError } from 'rxjs/operators';
import { StudentModel } from 'src/app/model/student.model';

interface FormData {
  classId: number
}
@Component({
  selector: 'app-student-register-class-modal',
  templateUrl: './student-register-class-modal.component.html',
  styleUrls: ['./student-register-class-modal.component.scss']
})
export class StudentRegisterClassModalComponent implements OnInit {

  $onlineClassesLookup: Observable<EntityLookupModel[]> = of([]);

  formData: FormData = {
    classId: null
  };

  constructor(private dialogRef: MatDialogRef<CreateOnlineClassModalComponent>,
    @Inject(MAT_DIALOG_DATA) private _student: StudentModel,
    private _onlineClasses: OnlineClassHttpService,
    private _studentHttp: StudentHttpService,
    private _httpError: GenericErrorHandlerService) {

  }

  ngOnInit(): void {
    this.$onlineClassesLookup = this._onlineClasses.lookup()
      .pipe(catchError(this._httpError.showeHttpToastError([])));
  }

  onOk() {
    this.registerStudent()
      .subscribe((response) => {
        if (response) {
          this.dialogRef.close({ ok: true })
        }
      })
  }

  registerStudent() {
    return this._studentHttp.registerStudentToClass(this._student.id, this.formData.classId)
      .pipe(catchError(this._httpError.showeHttpToastError(false)));
  }

}


import { Component, OnInit, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EntityLookupModel } from 'src/app/model/entity-lookup.model';
import { OnlineClassModel } from 'src/app/model/online-class-model';
import { MatDialogRef } from '@angular/material/dialog';
import { Course } from 'src/app/model/course';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TeacherHttpService } from 'src/app/services/http/teacher-http.service';
import { GenericErrorHandlerService } from 'src/app/services/errors/generic-error-handler.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-create-online-class-modal',
  templateUrl: './create-online-class-modal.component.html',
  styleUrls: ['./create-online-class-modal.component.scss']
})
export class CreateOnlineClassModalComponent implements OnInit {

  $teachersLookup: Observable<EntityLookupModel[]> = of([]);

  onlineClassModel: OnlineClassModel = {
    id: null,
    courseId: this._course?.id,
    teacherId: null,
    status: 'OPEN'
  };

  constructor(private dialogRef: MatDialogRef<CreateOnlineClassModalComponent>,
    @Inject(MAT_DIALOG_DATA) private _course: Course,
    private _teacherHttp:TeacherHttpService,private _httpError:GenericErrorHandlerService) {

  }

  ngOnInit(): void {
    this.$teachersLookup = this._teacherHttp.lookup()
      .pipe(catchError(this._httpError.showeHttpToastError([])));
  }

}

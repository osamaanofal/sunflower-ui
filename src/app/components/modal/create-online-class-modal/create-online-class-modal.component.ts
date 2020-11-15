import { OnlineClassHttpService } from 'src/app/services/http/online-class-http.service';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EntityLookupModel } from 'src/app/model/entity-lookup.model';
import { OnlineClassModel } from 'src/app/model/online-class-model';
import { MatDialogRef } from '@angular/material/dialog';
import { Course } from 'src/app/model/course';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TeacherHttpService } from 'src/app/services/http/teacher-http.service';
import { GenericErrorHandlerService } from 'src/app/services/errors/generic-error-handler.service';
import { catchError, map, shareReplay, switchMap } from 'rxjs/operators';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-create-online-class-modal',
  templateUrl: './create-online-class-modal.component.html',
  styleUrls: ['./create-online-class-modal.component.scss']
})
export class CreateOnlineClassModalComponent implements OnInit {

  $teachersLookup: Observable<EntityLookupModel[]> = of([]);
  $combined: Observable<EntityLookupModel[]> ;
  
  @ViewChild(NgForm) form: NgForm;
  @ViewChild("teacher", { read: NgModel }) autoComplete: NgForm;

  onlineClassModel: OnlineClassModel = {
    id: null,
    title: null,
    courseId: this._course?.id,
    teacherId: null,
    status: 'OPEN'
  };

  teacherLookupSelected: EntityLookupModel;

  constructor(private dialogRef: MatDialogRef<CreateOnlineClassModalComponent>,
    @Inject(MAT_DIALOG_DATA) private _course: Course,
    private _onlineClass: OnlineClassHttpService,
    private _teacherHttp: TeacherHttpService, private _httpError: GenericErrorHandlerService) {

  }

  ngOnInit(): void {
    this.$teachersLookup = this._teacherHttp.lookup()
      .pipe(shareReplay(), catchError(this._httpError.showeHttpToastError([])));
  }
  displayName(value: EntityLookupModel) {
    return value?.name;
  }
  onOk() {
    if (this.form.invalid) {
      alert(" form invalid")
      return
    }
    this.onlineClassModel.teacherId = this.teacherLookupSelected?.id;
    this.createOnlineClass()
      .subscribe((response) => {
        if (response) {
          this.dialogRef.close({ ok: true })
        }
      })
  }

  createOnlineClass() {
    return this._onlineClass.post(this.onlineClassModel)
      .pipe(catchError(this._httpError.showeHttpToastError(false)));
  }

  ngAfterViewInit() {
    this.$combined = (this.autoComplete.valueChanges as Observable<EntityLookupModel>).pipe(
      map(value => typeof value == 'object' ? value.name : value),
      switchMap((search: string = "") => {

        return this.$teachersLookup.
          pipe(map(lookups => {
            return lookups.filter(item => item.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1)
          }
          ))
      }),
      catchError(()=>of([]))
    )
  }
}

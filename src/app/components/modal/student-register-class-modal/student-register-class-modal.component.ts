import { OnlineClassHttpService } from 'src/app/services/http/online-class-http.service';
import { GenericErrorHandlerService } from 'src/app/services/errors/generic-error-handler.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { EntityLookupModel } from 'src/app/model/entity-lookup.model';
import { Component, OnInit, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { CreateOnlineClassModalComponent } from '../create-online-class-modal/create-online-class-modal.component';
import { StudentHttpService } from 'src/app/services/http/student-http.service';
import { catchError, concatMap, startWith, switchMap, filter, map, shareReplay } from 'rxjs/operators';
import { StudentModel } from 'src/app/model/student.model';
import { FormControl, NgForm, NgModel } from '@angular/forms';

interface FormData {
  classId: number
}
@Component({
  selector: 'app-student-register-class-modal',
  templateUrl: './student-register-class-modal.component.html',
  styleUrls: ['./student-register-class-modal.component.scss']
})
export class StudentRegisterClassModalComponent implements OnInit, AfterViewInit {

  @ViewChild(NgForm) form: NgForm;
  @ViewChild("onlineClass", { read: NgModel }) automComplete: NgForm;

  $onlineClassesLookup: Observable<EntityLookupModel[]> = of([]);
  $combined: Observable<EntityLookupModel[]> ;

  formData: FormData = {
    classId: null
  };


  onlineClassSelected: EntityLookupModel;

  constructor(private dialogRef: MatDialogRef<CreateOnlineClassModalComponent>,
    @Inject(MAT_DIALOG_DATA) private _student: StudentModel,
    private _onlineClasses: OnlineClassHttpService,
    private _studentHttp: StudentHttpService,
    private _httpError: GenericErrorHandlerService) {

  }

  ngOnInit(): void {

    this.$onlineClassesLookup = this._onlineClasses.lookup()
      .pipe(shareReplay(), catchError(this._httpError.showeHttpToastError([])));
  }

  ngAfterViewInit() {
    this.$combined = (this.automComplete.valueChanges as Observable<EntityLookupModel>).pipe(
      startWith({ name: '', id: null } as EntityLookupModel | string),
      map(value => typeof value == 'object' ? value.name : value),
      switchMap((search: string = "") => {

        return this.$onlineClassesLookup.
          pipe(map(lookups => {
            return lookups.filter(item => item.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1)
          }
          ))}),
          catchError(()=>of([]))
    )
  }
  onOk() {
    if (this.form.invalid) {
      alert("invalid form");
      return;
    }
    this.registerStudent()
      .subscribe((response) => {
        if (response) {
          this.dialogRef.close({ ok: true })
        }
      })
  }

  registerStudent() {
    return this._studentHttp.registerStudentToClass(this._student.id, this.onlineClassSelected.id)
      .pipe(catchError(this._httpError.showeHttpToastError(false)));
  }

  displayName(value: EntityLookupModel) {
    return value?.name;
  }
  
}


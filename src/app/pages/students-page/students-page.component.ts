import { StudentRegisterClassModalComponent } from './../../components/modal/student-register-class-modal/student-register-class-modal.component';
import { Component, OnInit } from '@angular/core';
import { GenericErrorHandlerService } from 'src/app/services/errors/generic-error-handler.service';
import { StudentHttpService } from './../../services/http/student-http.service';
import { catchError, shareReplay } from 'rxjs/operators';
import { StudentModel } from './../../model/student.model';
import { Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss']
})
export class StudentsPageComponent implements OnInit {

  $student:Observable<StudentModel[]> = of([]);

  constructor(private _studentHttp: StudentHttpService, 
    private _httpErrors: GenericErrorHandlerService,
    private _dialog:MatDialog) {

     }

  ngOnInit(): void {
    this.$student = this._studentHttp.all()
      .pipe(shareReplay(),catchError(this._httpErrors.showeHttpToastError([])))
  }

  openRegisterClassModal(){
    this._dialog.open(StudentRegisterClassModalComponent,{
      width:"500px",
      autoFocus:true
    }).afterClosed().subscribe((value)=>{
      console.log("succes",value)
    },()=>{
      console.log("ERROR")
    },()=>{
      console.log("complted")
    })
  }
}

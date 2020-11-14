import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentModel } from 'src/app/model/student.model';
import { GenericErrorHandlerService } from 'src/app/services/errors/generic-error-handler.service';
import { StudentHttpService } from 'src/app/services/http/student-http.service';
import { SimpleToastService } from 'src/app/services/notifications/simple-toast.service';
import { StudentRegisterClassModalComponent } from '../modal/student-register-class-modal/student-register-class-modal.component';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent implements OnInit {

  @Input('student') student:StudentModel


  constructor(private _studentHttp: StudentHttpService,
    private _httpErrors: GenericErrorHandlerService,
    private _dialog: MatDialog,
    private _notifyToast: SimpleToastService) {

  }
  ngOnInit(): void {
  }

  openRegisterClassModal(student: StudentModel) {
    this._dialog.open(StudentRegisterClassModalComponent, {
      width: "500px",
      data: student,
      autoFocus: true
    }).afterClosed().subscribe((value) => {
      if (value) {
        this._reloadStudent(student);
        this._notifyToast.showToast({
          message: "student registerd successfully"
        })
      }
    }, () => {
      console.log("ERROR")
    }, () => {
      console.log("complted")
    })
  }

  private _reloadStudent(student:StudentModel){
    this._studentHttp.get(student.id).subscribe((newStudent)=>Object.assign(student,newStudent))
  }
}

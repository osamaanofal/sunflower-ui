import { StudentModel } from 'src/app/model/student.model';
import { Component, OnInit } from '@angular/core';
import { GenericErrorHandlerService } from 'src/app/services/errors/generic-error-handler.service';
import { StudentHttpService } from './../../services/http/student-http.service';
import { catchError, shareReplay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


//TODO create Own Student Card
@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss']
})
export class StudentsPageComponent implements OnInit {

  $student: Observable<StudentModel[]> = of([]);

  constructor(private _studentHttp: StudentHttpService,
    private _httpErrors: GenericErrorHandlerService) {

  }

  ngOnInit(): void {
    this.$student = this._studentHttp.all()
      .pipe(shareReplay(), catchError(this._httpErrors.showeHttpToastError([])))
  }


}

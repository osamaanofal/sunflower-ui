import { Component, OnInit } from '@angular/core';
import { AvailableCourse } from 'src/app/model/available.course.model';
import { CoursesHttpService } from 'src/app/services/http/courses-http.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GenericErrorHandlerService } from 'src/app/services/errors/generic-error-handler.service';

@Component({
  selector: 'app-online-classes-page',
  templateUrl: './online-classes-page.component.html',
  styleUrls: ['./online-classes-page.component.scss']
})
export class OnlineClassesPageComponent implements OnInit {

  $openCourses: Observable<AvailableCourse[]>;

  constructor(private _coursesHtpp: CoursesHttpService,private _httpError:GenericErrorHandlerService) {

  }

  ngOnInit(): void {
    this.$openCourses = this._coursesHtpp.getOpenCoursesMappedToClasss()
    .pipe(catchError(this._httpError.showeHttpToastError([])));
  }

}

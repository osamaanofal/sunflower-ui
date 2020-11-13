import { Component, OnInit } from '@angular/core';
import { AvailableCourse } from 'src/app/model/available.course.model';
import { CoursesHttpService } from 'src/app/services/http/courses-http.service';
import { Observable, of } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';
import { GenericErrorHandlerService } from 'src/app/services/errors/generic-error-handler.service';

@Component({
  selector: 'app-open-courses-page',
  templateUrl: './open-courses-page.component.html',
  styleUrls: ['./open-courses-page.component.scss']
})
export class OpenCoursesPageComponent implements OnInit {

  $openCourses: Observable<AvailableCourse[]> = of([]);

  constructor(private _coursesHtpp: CoursesHttpService, private _httpError: GenericErrorHandlerService) {
console.log(this.$openCourses)
  }

  ngOnInit(): void {
    this.$openCourses = this._coursesHtpp.getOpenCoursesMappedToClasss()
      .pipe(shareReplay(), catchError(this._httpError.showeHttpToastError([])));
  }

}


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, shareReplay, switchMap } from 'rxjs/operators';
import { Course } from 'src/app/model/course';
import { GenericErrorHandlerService } from 'src/app/services/errors/generic-error-handler.service';
import { CoursesHttpService } from 'src/app/services/http/courses-http.service';

@Component({
  selector: 'app-view-course-page',
  templateUrl: './view-course-page.component.html',
  styleUrls: ['./view-course-page.component.scss']
})
export class ViewCoursePageComponent implements OnInit {

  $course: Observable<Course>;

  constructor(private coursehttp: CoursesHttpService,
    private _httpError: GenericErrorHandlerService,
    private _activateRoute: ActivatedRoute) {

  }

  ngOnInit() {

    this.$course = this._activateRoute.paramMap.pipe(switchMap((params) => {
      return this._loadCourseById(params.get("id"))
    }))



  }

  private _loadCourseById(id: number | string) {
    return this.coursehttp.get(id)
      .pipe(shareReplay(), catchError(this._httpError.showeHttpToastError({})));
  }
}

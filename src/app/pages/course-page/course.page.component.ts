import { Component, OnInit } from '@angular/core';
import { CoursesHttpService } from 'src/app/services/http/courses-http.service';
import { BaseModelService } from './../../services/http/base-model.service';
import { Observable } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';
import { GenericErrorHandlerService } from 'src/app/services/errors/generic-error-handler.service';


@Component({
    selector: 'course',
    templateUrl: './course.page.component.html',
    styleUrls: ['./course.page.component.scss']
})
export class CoursePageComponent implements OnInit {

    $courses: Observable<any>;

    constructor(private coursehttp: CoursesHttpService, private _httpError: GenericErrorHandlerService  ) {

    }

    ngOnInit() {
        this.$courses = this.coursehttp.all()
            .pipe(shareReplay(), catchError(this._httpError.showeHttpToastError([])));

    }

}












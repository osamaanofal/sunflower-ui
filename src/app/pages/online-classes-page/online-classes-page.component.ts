import { Component, OnInit } from '@angular/core';
import { AvailableCourse } from 'src/app/model/available.course.model';
import { CoursesHttpService } from 'src/app/services/http/courses-http.service';
import { Observable } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';
import { GenericErrorHandlerService } from 'src/app/services/errors/generic-error-handler.service';
import { OnlineClassHttpService } from './../../services/http/online-class-http.service';

@Component({
  selector: 'app-online-classes-page',
  templateUrl: './online-classes-page.component.html',
  styleUrls: ['./online-classes-page.component.scss']
})
export class OnlineClassesPageComponent implements OnInit {

  $onlineClasses: Observable<AvailableCourse[]>;

  constructor(private _onlineClassHtpp: OnlineClassHttpService, private _httpError: GenericErrorHandlerService) {

  }

  ngOnInit(): void {
    this.$onlineClasses = this._onlineClassHtpp.all()
      .pipe(shareReplay(),catchError(this._httpError.showeHttpToastError([])));
  }

}

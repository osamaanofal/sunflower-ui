import { Injectable } from '@angular/core';
import { BaseModelService } from './base-model.service';
import { HttpClient } from '@angular/common/http';
import { API_CONSTANT, API_ENDPOINTS } from './api-constant';
import { Observable } from 'rxjs';
import { AvailableCourse } from 'src/app/model/available.course.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesHttpService extends BaseModelService {

  constructor(http: HttpClient) {
    super(http, API_CONSTANT.COURSES)
  }


  /**
   * get available/open course mapped to online class
   */

  public getOpenCoursesMappedToClasss(): Observable<AvailableCourse[]> {
    return this.http.get<AvailableCourse[]>(this.MODEL_URL + API_ENDPOINTS.GET_OPEN_COURSES)
    .pipe(this.extracDataMapper(),catchError(this.catchError()));
  }


}

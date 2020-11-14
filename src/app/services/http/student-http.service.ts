import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseModelService } from './base-model.service';
import { API_CONSTANT, API_ENDPOINTS } from './api-constant';

@Injectable({
  providedIn: 'root'
})
export class StudentHttpService extends BaseModelService {

  constructor(http: HttpClient) {
    super(http, API_CONSTANT.STUDENT)

  }

  /**
   * @param
   * @param
   * Register student to class of a mapped course
   */

  registerStudentToClass(studentId, classId) {
    const url = this.apiUrl + API_ENDPOINTS.REGISTER_STUDENT_ONLINE_CLASS(studentId, classId)
    return this.doPostMethod(url);
  }
}

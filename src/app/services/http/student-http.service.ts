import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseModelService } from './base-model.service';
import { API_CONSTANT } from './api-constant';

@Injectable({
  providedIn: 'root'
})
export class StudentHttpService extends BaseModelService {

  constructor(http: HttpClient) {
    super(http, API_CONSTANT.STUDENT)

  }
}

import { Injectable } from '@angular/core';
import { BaseModelService } from './base-model.service';
import { HttpClient } from '@angular/common/http';
import { API_CONSTANT } from './api-constant';

@Injectable({
  providedIn: 'root'
})
export class CoursesHttpService extends BaseModelService {

  constructor(http:HttpClient) {
    super(http,API_CONSTANT.COURSES)
   }
   
}

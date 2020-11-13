import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONSTANT } from './api-constant';
import { BaseModelService } from './base-model.service';

@Injectable({
  providedIn: 'root'
})
export class OnlineClassHttpService extends BaseModelService {

  constructor(http:HttpClient) {
    super(http,API_CONSTANT.COURSES)
   }
}

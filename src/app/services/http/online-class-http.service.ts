import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONSTANT, API_ENDPOINTS } from './api-constant';
import { BaseModelService } from './base-model.service';

@Injectable({
  providedIn: 'root'
})
export class OnlineClassHttpService extends BaseModelService {

  constructor(http:HttpClient) {
    super(http,API_CONSTANT.ONLINE_CLASSES)
   }

   openClass(classId:number){
     const url = this.apiUrl + API_ENDPOINTS.ONLINE_CLASS_OPEN(classId);
     return this.doPostMethod(url);
   }
   
   closeClass(classId:number){
    const url = this.apiUrl + API_ENDPOINTS.ONLINE_CLASS_CLOSE(classId);
    return this.doPostMethod(url);
  }
}

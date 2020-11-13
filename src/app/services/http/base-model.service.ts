import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';

export class BaseModelService {
  public readonly apiUrl = environment.apiUrl;
  protected readonly MODEL_URL = `${this.apiUrl}/${this.model}`;
  constructor(
    public http: HttpClient,
    public model: string) {
  }

  all(pageNo = 0,  perPage = 100, sortBy = '', orderBy = '') {
    return this.http.get(this.apiUrl + '/' + this.model + '?page=' +
      pageNo + '&size=' + perPage )
      .pipe(this.extracDataMapper(),catchError(this.catchError()));
  }

  post(obj) {
    return this.http.post(this.apiUrl + '/' + this.model + "/create" + '',obj)
      .pipe(this.extracDataMapper(), catchError(this.catchError()))
  }

  get(id) {
    return this.http.get(this.apiUrl + '/' + this.model + '/' + id);
  }

  put(id, obj) {
    return this.http.put(this.apiUrl + '/' + this.model + '/update?id=' + id, obj)
      .pipe(this.extracDataMapper(), catchError(this.catchError()))
  }

  protected catchError(){
    return (error) => {
      if(error  && typeof error == 'string'
      && error.toLocaleLowerCase() == "unknown error"){
        return throwError("Connection Error");
      }
      else return throwError(error);
    }
  }
 
  protected extracDataMapper() {
    return map((response: any) => {
      return response
    });
  }
}

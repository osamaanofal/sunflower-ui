import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of } from 'rxjs';
import { ResponseApiError } from 'src/app/model/http.error.model';

@Injectable({
  providedIn: 'root'
})
export class GenericErrorHandlerService {

  constructor(private _toast: MatSnackBar) {

  }


  private _showToastMessage(message: string, action: string = "Error", duration = 5000) {
    this._toast.open(message, action, {
      duration,
    });
  }


  public showeHttpToastError(defaultResponse: any = []) {
    return (error) => {
      if (error && typeof error == 'string'
        && error.toLocaleLowerCase() == "unknown error") {
        this._showToastMessage("Connection Error");
      }
      else if(error instanceof HttpErrorResponse){
        const responseError = error.error as ResponseApiError;
        this._showToastMessage(responseError.message,responseError.error);
      }else {
        this._showToastMessage(error, "somthing went wrong");
      }
      
      return of(defaultResponse);
    }
  }

}

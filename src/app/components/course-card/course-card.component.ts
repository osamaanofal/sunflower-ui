import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Course } from 'src/app/model/course';
import { OnlineClassModel } from 'src/app/model/online-class-model';
import { SimpleToastService } from 'src/app/services/notifications/simple-toast.service';
import { CreateOnlineClassModalComponent } from '../modal/create-online-class-modal/create-online-class-modal.component';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {

  @Input("course") course: Course

  constructor(private _dialog: MatDialog,private _notifyToast:SimpleToastService) { }

  ngOnInit(): void {
  }

  openRegisterClassModal() {

    this._dialog.open(CreateOnlineClassModalComponent, {
      data: this.course,
      width: "500px",
      autoFocus: true
    }).afterClosed().subscribe(
      (response) => {
        if(response){
          this._notifyToast.showToast({
            action:"Create Class",
            message:"Class created Successfully"
          })
        }
      }
    )

  }
}

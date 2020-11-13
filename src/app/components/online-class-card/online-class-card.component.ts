import { Component, Input, OnInit } from '@angular/core';
import { AvailableCourse } from 'src/app/model/available.course.model';

@Component({
  selector: 'app-online-class-card',
  templateUrl: './online-class-card.component.html',
  styleUrls: ['./online-class-card.component.scss']
})
export class OnlineClassCardComponent implements OnInit {

  @Input("onlineClass") onlineClass: AvailableCourse;

  constructor() { }

  ngOnInit(): void {
  }

}

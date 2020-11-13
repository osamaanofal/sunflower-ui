import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/model/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {

  @Input("course") course:Course
  
  constructor() { }

  ngOnInit(): void {
  }

}

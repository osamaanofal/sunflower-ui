import { Component, OnInit } from '@angular/core';
import { CoursesHttpService } from 'src/app/services/http/courses-http.service';
import { BaseModelService } from './../../services/http/base-model.service';
import { Observable } from 'rxjs';


@Component({
    selector: 'course',
    templateUrl: './course.page.component.html',
    styleUrls: ['./course.page.component.css']
})
export class CoursePageComponent implements OnInit {

    $courses: Observable<any>;

    constructor(private coursehttp: CoursesHttpService) {

    }

    ngOnInit() {
        this.$courses = this.coursehttp.all()
    }

}












import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "../pages/home/home.component";
import { CoursePageComponent } from "../pages/course-page/course.page.component";
import { StudentsPageComponent } from '../pages/students-page/students-page.component';
import { OpenCoursesPageComponent } from '../pages/open-courses-page/open-courses-page.component';
import { CreateOnlineClassPageComponent } from '../pages/create-online-class-page/create-online-class-page.component';
import { OnlineClassesPageComponent } from '../pages/online-classes-page/online-classes-page.component';

const routes: Routes = [
    {
        path: "",
        component: HomeComponent

    },

    {
        path: 'students',
        component: StudentsPageComponent
    },

    {
        path: 'open-courses',
        component: OpenCoursesPageComponent
    },
    {
        path: 'create-class',
        component: CreateOnlineClassPageComponent
    },
    {
        path: 'online-classes',
        component: OnlineClassesPageComponent
    },
    {
        path: 'courses',
        component: CoursePageComponent
    },
    {
        path: "**",
        redirectTo: '/'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './submodules/material.module';


import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';

import { CourseDialogComponent } from './components/courses/course-dialog/course-dialog.component';
import { CoursePageComponent } from './pages/course-page/course.page.component';

import { HomeComponent } from './pages/home/home.component';
import { CoursesCardListComponent } from './components/courses/courses-card-list/courses-card-list.component';
import { SideNavMenuComponent } from './components/layout/side-nav-menu/side-nav-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { OpenCoursesPageComponent } from './pages/open-courses-page/open-courses-page.component';
import { CreateOnlineClassPageComponent } from './pages/create-online-class-page/create-online-class-page.component';
import { OnlineClassesPageComponent } from './pages/online-classes-page/online-classes-page.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { OnlineClassCardComponent } from './components/online-class-card/online-class-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewCoursePageComponent } from './pages/view-course-page/view-course-page.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { CreateOnlineClassComponent } from './components/modal/create-online-class/create-online-class.component';
import { StudentRegisterClassModalComponent } from './components/modal/student-register-class-modal/student-register-class-modal.component';
import { StudentClassesModalComponent } from './components/modal/student-classes-modal/student-classes-modal.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CoursePageComponent,
        CoursesCardListComponent,
        CourseDialogComponent,
        SideNavMenuComponent,
        OpenCoursesPageComponent,
        CreateOnlineClassPageComponent,
        OnlineClassesPageComponent,
        StudentsPageComponent,
        CardItemComponent,
        OnlineClassCardComponent,
        ViewCoursePageComponent,
        CourseCardComponent,
        CreateOnlineClassComponent,
        StudentRegisterClassModalComponent,
        StudentClassesModalComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        MaterialModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [

    ],
    bootstrap: [AppComponent],
    entryComponents: [CourseDialogComponent]
})
export class AppModule {
}

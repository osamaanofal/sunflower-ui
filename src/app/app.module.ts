import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './submodules/material.module';


import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';

import { CoursePageComponent } from './pages/course-page/course.page.component';

import { HomeComponent } from './pages/home/home.component';
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
import { GenericTemplateModalComponent } from './components/modal/generic-template-modal/generic-template-modal.component';
import { CreateOnlineClassModalComponent } from './components/modal/create-online-class-modal/create-online-class-modal.component';
import { StudentCardComponent } from './components/student-card/student-card.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CoursePageComponent,
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
        StudentClassesModalComponent,
        GenericTemplateModalComponent,
        CreateOnlineClassModalComponent,
        StudentCardComponent
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
    entryComponents: []
})
export class AppModule {
}

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

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CoursePageComponent,
        CoursesCardListComponent,
        CourseDialogComponent,
        SideNavMenuComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MaterialModule
    ],
    providers: [

    ],
    bootstrap: [AppComponent],
    entryComponents: [CourseDialogComponent]
})
export class AppModule {
}

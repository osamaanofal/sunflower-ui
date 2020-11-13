import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "../pages/home/home.component";
import { CoursePageComponent } from "../pages/course-page/course.page.component";

const routes: Routes = [
    {
        path: "",
        component: HomeComponent

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

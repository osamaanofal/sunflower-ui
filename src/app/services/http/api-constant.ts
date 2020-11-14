export const API_CONSTANT = {

    COURSES: 'courses',

    STUDENT: 'students',

    ONLINE_CLASSES: "online-classes",

    TEACHER: "teachers"


}

export const API_ENDPOINTS = {
    GET_OPEN_COURSES: '/getOpenCourses',
    
    REGISTER_STUDENT_ONLINE_CLASS:(studentId,classId) => `/student/${studentId}/online-class/${classId}`
}
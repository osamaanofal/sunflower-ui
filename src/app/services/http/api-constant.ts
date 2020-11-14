export const API_CONSTANT = {

    COURSES: 'courses',

    STUDENT: 'students',

    ONLINE_CLASSES: "online-classes",

    TEACHER: "teachers"


}

export const API_ENDPOINTS = {
    GET_OPEN_COURSES: '/getOpenCourses',

    REGISTER_STUDENT_ONLINE_CLASS: (studentId, classId) => `/student/${studentId}/online-class/${classId}`,

    ONLINE_CLASS_CLOSE: (classId) => `/online-classes/${classId}/close`,

    ONLINE_CLASS_OPEN: (classId) => `/online-classes/${classId}/open`,

}
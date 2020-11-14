export interface OnlineClassModel {
    id: number | null,
    teacherId: number | null,
    courseId: number | null
    status: 'OPEN' | "CLOSED";
    title:string
}
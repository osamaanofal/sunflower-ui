
import { OnlineClassModel } from './online.class.model';

export interface StudentModel {
    "id": number,
    "firstName": string,
    "lastName": string,
    onlineClasses: OnlineClassModel[]
}
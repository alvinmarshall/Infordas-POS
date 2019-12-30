import { IUser } from "./IUser";

export interface IAdmin extends IUser{
    adminRef:string;
}
import { Client_Type } from "../../../../common/constants";

export interface IClientParams{
    type:Client_Type,
    identifier?:string
}
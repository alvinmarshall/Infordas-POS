import { Client_Type } from "../../../../common/constants";

export interface IClient {
  id?: number;
  uid: string;
  name: string;
  contact?: string;
  address?: string;
  email?: string;
  prevDue?: number;
  createdAt?: Date;
  modifiedAt?: Date;
  type?: Client_Type;
}

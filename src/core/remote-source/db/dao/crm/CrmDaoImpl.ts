// Copyright 2019 Bik_krl
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { CrmDao } from "./CrmDao";
import { IClient } from "../../../../domain/entity/crm/IClient";
import { MysqlDatabase } from "../../MysqlDatabase";
import { inject, injectable } from "inversify";
import {
  CUSTOMER_TABLE,
  SUPPLIER_TABLE
} from "../../../../../common/constants";

@injectable()
export class CrmDaoImpl implements CrmDao {
  private db: MysqlDatabase;

  constructor(@inject(MysqlDatabase) $db: MysqlDatabase) {
    this.db = $db;
  }
  getCustomer(): Promise<IClient[]> {
    const sql = `
    SELECT
        Cus_ID AS uid,
        Name AS name,
        Contact As contact,
        Email AS email,
        Address As address,
        PrevDue AS prevDue,
        Created_At As createdAt,
        Modified_At AS modifiedAt
      FROM  ${CUSTOMER_TABLE}`;
    return this.db.query(sql, []);
  }
  getCustomerWithIdentifier(identifier: string): Promise<IClient[]> {
    const sql = `
    SELECT
        Cus_ID AS uid,
        Name AS name,
        Contact As contact,
        Email AS email,
        Address As address,
        PrevDue AS prevDue,
        Created_At As createdAt,
        Modified_At AS modifiedAt
      FROM  ${CUSTOMER_TABLE} WHERE Cus_ID = ?`;
    return this.db.query(sql, [identifier]);
  }
  getSupplier(): Promise<IClient[]> {
    const sql = `
    SELECT
        Sup_ID AS uid,
        Name AS name,
        Contact As contact,
        Email AS email,
        Address As address,
        PrevDue AS prevDue,
        Created_At As createdAt,
        Modified_At AS modifiedAt
      FROM  ${SUPPLIER_TABLE}`;
    return this.db.query(sql, []);
  }
  getSupplierWithIdentifier(identifier: string): Promise<IClient[]> {
    const sql = `
    SELECT
        Sup_ID AS uid,
        Name AS name,
        Contact As contact,
        Email AS email,
        Address As address,
        PrevDue AS prevDue,
        Created_At As createdAt,
        Modified_At AS modifiedAt
      FROM  ${SUPPLIER_TABLE} WHERE Sup_ID = ?`;
    return this.db.query(sql, [identifier]);
  }
  addCustomer(customer: IClient): Promise<any> {
    const sql = `INSERT INTO ${CUSTOMER_TABLE} (Name,Cus_ID,Contact,Email,Address,PrevDue) 
    VALUES (?,REPLACE(?,'-',''),?,?,?,?)`;
    return this.db
      .query(sql, [
        customer.name,
        customer.uid,
        customer.contact,
        customer.email,
        customer.address,
        customer.prevDue
      ])
      .then(data => {
        return { message: `${data.affectedRows} item inserted` };
      });
  }
  addSupplier(supplier: IClient): Promise<any> {
    const sql = `INSERT INTO ${SUPPLIER_TABLE} (Name,Sup_ID,Contact,Email,Address,PrevDue) 
    VALUES (?,REPLACE(?,'-',''),?,?,?,?)`;
    return this.db
      .query(sql, [
        supplier.name,
        supplier.uid,
        supplier.contact,
        supplier.email,
        supplier.address,
        supplier.prevDue
      ])
      .then(data => {
        return { message: `${data.affectedRows} item inserted` };
      });
  }
}

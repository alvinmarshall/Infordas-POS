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

import { MysqlDatabase } from "../../MysqlDatabase";
import { UserDao } from "./UserDao";
import { UserEntity } from "../../../../domain/entity/user/UserEntity";
import {
  USER_TABLE,
  ACCESS_TABLE,
  EMPLOYEE_TABLE
} from "../../../../../common/constants";
import { injectable, inject, id } from "inversify";
import { IUser } from "../../../../domain/entity/user/IUser";
import { IAccess } from "../../../../domain/entity/access/IAccess";

@injectable()
export class UserDaoImpl implements UserDao {
  private db: MysqlDatabase;

  constructor(@inject(MysqlDatabase) $db: MysqlDatabase) {
    this.db = $db;
  }

  getUsers(): Promise<IUser[]> {
    let sql = `SELECT 
      u.Name AS name,
      u.Contact AS contact,
      u.Emp_ID AS uuid,
      u.Username AS username,
      u.Password AS password,
      u.Rank_ID AS rank,
      e.Hours AS hours

    FROM ${USER_TABLE} u
    INNER JOIN ${EMPLOYEE_TABLE} e WHERE u.Emp_ID = e.Emp_ID`;
    return this.db.query(sql, []);
  }

  getUserWithidentifier(identifier: string): Promise<IUser[]> {
    let sql = `SELECT 
      u.Name AS name,
      u.Contact AS contact,
      u.Emp_ID AS uuid,
      u.Username AS username,
      u.Password AS password,
      u.Rank_ID AS rank,
      e.Hours AS hours
  
    FROM ${USER_TABLE} u
    INNER JOIN ${EMPLOYEE_TABLE} e
    WHERE u.Emp_ID = ?

  `;
    return this.db.query(sql, [identifier]);
  }

  addUserAccess(access: IAccess): Promise<any> {
    let sql = `REPLACE into ${ACCESS_TABLE} (Emp_ID,Token) VALUES (?,?)`;
    return this.db.query(sql, [access.uuid, access.token]).then(data => {
      return data.affectedRows;
    });
  }

  addUser(user: IUser): Promise<any> {
    let sql = `INSERT INTO ${USER_TABLE} (Name,Contact,Emp_ID,Username,Password,Rank_ID) 
    VALUES(?,?,REPLACE(?,'-',''),?,?,?)`;
    return this.db
      .query(sql, [
        user.name,
        user.contact,
        user.uuid,
        user.username,
        user.password,
        user.rank
      ])
      .then(data => {
        return { message: `${data.affectedRows} record inserted` };
      });
  }

  getUserWithCredentials(username: string, password: string): Promise<IUser> {
    let sql = `SELECT 
      u.Name AS name,
      u.Contact AS contact,
      u.Emp_ID AS uuid,
      u.Username AS username,
      u.Password AS password,
      u.Rank_ID AS rank,
      e.Hours AS hours,
      e.Image AS imageUrl
    
    FROM users u
    INNER JOIN employee e
    WHERE u.Username = ? LIMIT 1
    `;
    return this.db.query(sql, [username]).then(data => {
      return data[0];
    });
  }
}

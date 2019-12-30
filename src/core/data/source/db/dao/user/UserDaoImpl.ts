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

import { UserDao } from "./UserDao";
import { DatabaseContext } from "../../../remote-source/DatabaseContext";
import { injectable, inject } from "inversify";
import { IUser } from "../../../../../domain/entity/user/IUser";
import {
  USER_TABLE,
  EMPLOYEE_TABLE,
  ACCESS_TABLE,
  ADMIN_TABLE,
  RANK_TABLE
} from "../../../../../../common/constants";
import { IAccess } from "../../../../../domain/entity/access/IAccess";
import { IAdmin } from "../../../../../domain/entity/user/IAdmin";

@injectable()
export class UserDaoImpl implements UserDao {
  private db: DatabaseContext;

  constructor(@inject(DatabaseContext) $db: DatabaseContext) {
    this.db = $db;
  }

  async addAdmin(admin: IAdmin): Promise<any> {
    try {
      const message = "You need an administrator right to create this account";
      const checkAdminAvailability = await this.checkAdminAvailability();
      const rankId = await this.createOrAssignAdminRank();
      admin.rank = rankId;
      if (checkAdminAvailability) {
        const checkRef = await this.checkAdminReference(admin.adminRef);
        if (checkRef) return this.createAdminAccount(admin);
        return Promise.resolve({ message });
      }
      return this.createAdminAccount(admin);
    } catch (error) {
      return Promise.reject(error);
    }
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

  //#region  HELPER FUNCTIONS
  private createAdminAccount(admin: IAdmin): Promise<any> {
    const sql = `INSERT INTO ${ADMIN_TABLE} (Name,Contact,Emp_ID,Username,Password,Rank_ID) 
    VALUES(?,?,REPLACE(?,'-',''),?,?,?)`;
    return this.db
      .query(sql, [
        admin.name,
        admin.contact,
        admin.uuid,
        admin.username,
        admin.password,
        admin.rank
      ])
      .then(data => {
        return { message: `${data.affectedRows} item inserted` };
      });
  }
  private async createOrAssignAdminRank(
    position: string = "Admin"
  ): Promise<any> {
    let sql = `SELECT id FROM ${RANK_TABLE} WHERE Position = ? LIMIT 1`;
    return this.db.query(sql, [position]).then(data => {
      if (data[0] && data[0].id > 0) {
        return data[0].id;
      }
      sql = `INSERT INTO ${RANK_TABLE} (Position) VALUES(?)`;
      return this.db.query(sql, [position]).then(data => data.insertId);
    });
  }
  private checkAdminAvailability(): Promise<boolean> {
    const sql = `SELECT COUNT(*) AS count FROM ${ADMIN_TABLE}`;
    return this.db.query(sql, []).then(data => {
      if (data[0] && data[0].count > 0) {
        return true;
      }
      return false;
    });
  }

  private checkAdminReference(adimRef: string): Promise<boolean> {
    const sql = `SELECT COUNT(*) AS count FROM ${ADMIN_TABLE} WHERE Emp_ID = ? LIMIT 1`;
    return this.db.query(sql, [adimRef]).then(data => {
      if (data[0] && data[0].count > 0) {
        return true;
      }
      return false;
    });
  }
  //#endregion
}

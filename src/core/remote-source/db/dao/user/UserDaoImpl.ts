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
import { USER_TABLE, ACCESS_TABLE } from "../../../../../common/constants";
import { injectable, inject, id } from "inversify";
import { IUser } from "../../../../domain/entity/user/IUser";
import { IAccess } from "../../../../domain/entity/access/IAccess";

@injectable()
export class UserDaoImpl implements UserDao {
  private db: MysqlDatabase;

  constructor(@inject(MysqlDatabase) $db: MysqlDatabase) {
    this.db = $db;
  }

  getUserWithidentifier(identifier: string): Promise<UserEntity> {
    let sql = `SELECT id,Name,Contact,Emp_ID,Username,Rank_ID FROM ${USER_TABLE} WHERE Emp_ID = ? `;
    return this.db.query(sql, [identifier]).then(data => {
      const {
        id,
        Name,
        Username,
        Contact,
        Emp_ID,
        Rank_ID,
        Password
      } = data[0];

      const user = new UserEntity();
      user.$id = id;
      user.$name = Name;
      user.$contactNo = Contact;
      user.$uuid = Emp_ID;
      user.$username = Username;
      user.$rank = Rank_ID;
      user.$password = Password;
      return user;
    });
  }

  addUserAccess(access: IAccess): Promise<any> {
    let sql = `REPLACE into ${ACCESS_TABLE} (Emp_ID,Token) VALUES (?,?)`;
    return this.db.query(sql, [access.uuid, access.token]).then(data => {
      return data.affectedRows;
    });
  }

  addUser(user: IUser): Promise<any> {
    let sql = `INSERT INTO ${USER_TABLE} (Name,Contact,Emp_ID,Username,Password,Rank_ID) VALUES(?,?,?,?,?,?)`;
    return this.db
      .query(sql, [
        user.name,
        user.contactNo,
        user.uuid,
        user.username,
        user.password,
        user.rank
      ])
      .then(data => {
        if (data.affectedRows > 0) `${user.name} account ready`;
        return "0 record inserted";
      });
  }

  getUserWithCredentials(
    username: string,
    password: string
  ): Promise<UserEntity> {
    let sql = `SELECT id,Name,Contact,Emp_ID,Username,Rank_ID FROM ${USER_TABLE} WHERE Username = ? AND Password = ? `;
    return this.db.query(sql, [username, password]).then(data => {
      const {
        id,
        Name,
        Username,
        Contact,
        Emp_ID,
        Rank_ID,
        Password
      } = data[0];

      const user = new UserEntity();
      user.$id = id;
      user.$name = Name;
      user.$contactNo = Contact;
      user.$uuid = Emp_ID;
      user.$username = Username;
      user.$rank = Rank_ID;
      user.$password = Password;
      return user;
    });
  }
}

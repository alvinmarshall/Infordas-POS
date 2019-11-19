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



import config from "config";
import mysql from "mysql";
import { injectable } from "inversify";

/**
 * MysqlDatabase class
 * Remote service
 */
@injectable()
export class MysqlDatabase {
  private iconfig: string = config.get("mysqlConfig");
  private connection: mysql.Pool;

  constructor() {
    this.connection = mysql.createPool(this.iconfig);
  }

  /**
   * 
   * @param sql prvide sql statement
   * @param args  provide arguments
   * @returns Promise<any>
   */
  query(sql: string, args: any): Promise<any> {
    return new Promise((resolve, rejects) => {
      this.connection.query(sql, args, (err, results) => {
        if (err) return rejects(err);
        console.log("results", JSON.stringify(results));
        return resolve(results);
      });
    });
  }

  /**
   * Setter $iconfig
   * @param {string } value
   */
  public set $iconfig(value: string) {
    this.iconfig = value;
  }
}

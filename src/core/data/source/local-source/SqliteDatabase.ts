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

import { BaseDatabase } from "../db/base/BaseDatabase";
import { injectable } from "inversify";
import sqlite from "sqlite3";

/**
 * SqliteDatabase class
 * local service
 * super class {@Links ../db/base/BaseDatabase}
 */
@injectable()
export class SqliteDatabase extends BaseDatabase {
  constructor($connectionString: string) {
    super($connectionString);
    this.connection = new sqlite.Database(this.connectionString, err => {
      if (err) return console.error(err);
    });
  }
  query(sql: string, args: any): Promise<any> {
    return this.usingSqlite(sql, args);
  }

  private usingSqlite(sql: string, args: any) {
    if (
      sql.includes("INSERT") ||
      sql.includes("UPDATE") ||
      sql.includes("DELETE")
    ) {
      return this.queryRun(sql, args);
    }
    return this.queryGet(sql, args);
  }

  private queryRun(sql: string, args: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.connection.run(sql, args, function(err: any) {
        if (err) return reject(err);
        //@ts-ignore
        const affectedRows = this.changes;
        resolve(affectedRows);
      });
    });
  }

  private queryGet(sql: string, args: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.connection.all(sql, args, (err: any, results: any) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  }
}

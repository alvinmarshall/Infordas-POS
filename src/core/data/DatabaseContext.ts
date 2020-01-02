import mysql from "mysql";
import { injectable } from "inversify";
import { BaseDatabase } from "./source/db/base/BaseDatabase";

@injectable()
export class DatabaseContext extends BaseDatabase {
  constructor($connectionString: string) {
    super($connectionString);
    this.connection = mysql.createPool(this.connectionString);
  }
  query(sql: string, args: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, args, (err: any, results: any) => {
        if (err) return reject(err);
        console.log("results", JSON.stringify(results));
        return resolve(results);
      });
    });
  }
}

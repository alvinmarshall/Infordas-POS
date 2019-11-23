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

import { RankDao } from "./RankDao";
import { injectable, inject } from "inversify";
import { MysqlDatabase } from "../../MysqlDatabase";
import { RANK_TABLE } from "../../../../../common/constants";
import { IRank } from "../../../../domain/entity/rank/IRank";
/**
 * RankDaoImpl
 * class implements RankDao {@Link ./RankDao}
 */
@injectable()
export class RankDaoImpl implements RankDao {
  private db: MysqlDatabase;

  /**
   * @constructor
   * @param $db require MysqlDatabase instance
   */
  constructor(@inject(MysqlDatabase) $db: MysqlDatabase) {
    this.db = $db;
  }

  getRanks(): Promise<IRank[]> {
    let sql = `SELECT id, Position AS position FROM ${RANK_TABLE}`;
    return this.db.query(sql, []);
  }
  getRankWithIdentifier(identifier: string): Promise<IRank[]> {
    let sql = `SELECT id, Position AS position FROM rank WHERE id = ?`;
    return this.db.query(sql, [identifier]);
  }

  /**
   * AddRank new Rank
   * @param position provide type string
   * @returns Promise<{obj}>
   */
  addRank(rank: IRank): Promise<any> {
    let sql = `INSERT INTO ${RANK_TABLE} (Position) VALUES (?)`;
    return this.db.query(sql, [rank.position]).then(data => {
      if (data.affectedRows > 0) {
        const insertedId = data.insertId;
        return { message: "Rank added", rankId: insertedId };
      }
      return { message: "0 record inserted" };
    });
  }

  /**
   * RemoveRank from table
   * @param identifier require rank id
   * @returns Promise<string>
   */
  removeRank(identifier: string): Promise<any> {
    let sql = `DELETE FROM ${RANK_TABLE} WHERE id = ?`;
    return this.db.query(sql, [identifier]).then(data => {
      return { message: `${data.affectedRows} record removed` };
    });
  }

  /**
   * UpdateRank
   * @param rank type IRank
   * @returns Promise<{obj}>
   */
  updateRank(rank: IRank): Promise<any> {
    let sql = `UPDATE ${RANK_TABLE} SET Position = ? WHERE id = ?`;
    return this.db.query(sql, [rank.position, rank.id]).then(data => {
      return { message: `${data.affectedRows} record modified` };
    });
  }
}

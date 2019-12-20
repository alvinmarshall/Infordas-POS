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
import { IRank } from "../../../../domain/entity/rank/IRank";
import { RANK_TABLE, USER_TABLE } from "../../../../../common/constants";
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
    return new Promise(async (resolve, reject) => {
      let sql = `SELECT id, Position AS position FROM ${RANK_TABLE}`;
      try {
        const rank: IRank[] = await this.db.query(sql, []);
        sql = `
       SELECT  r.id,r.Position AS position,COUNT(u.Rank_ID) AS count FROM 
       ${RANK_TABLE} r INNER JOIN ${USER_TABLE} u WHERE r.id = u.Rank_ID  GROUP BY r.Position;
       `;
        const newRank: IRank[] = await this.db.query(sql, []);
        for (let i = 0; i < rank.length; i++) {
          let match = false;
          let count = 0;
          for (let j = 0; j < newRank.length; j++) {
            if (rank[i].position === newRank[j].position) {
              rank[i].count = newRank[j].count;
            }
          }
        }
        resolve(rank);
      } catch (error) {
        reject(error);
      }
    });
  }
  getRankWithIdentifier(identifier: string): Promise<IRank[]> {
    let sql = `SELECT id, Position AS position FROM ${RANK_TABLE} WHERE id = ?`;
    return this.db.query(sql, [identifier]);
  }

  /**
   * AddRank new Rank
   * @param position provide type string
   * @returns Promise<{obj}>
   */
  addRank(rank: IRank): Promise<any> {
    let sql = `SELECT id FROM ${RANK_TABLE} WHERE Position = ? LIMIT 1`;
    return this.db.query(sql, [rank.position]).then(data => {
      if (data[0] && data[0].id > 0) {
        return { message: `${rank.position} position already exist` };
      } else {
        sql = `INSERT INTO ${RANK_TABLE} (Position) VALUES (?)`;
        return this.db.query(sql, [rank.position]).then(data => {
          if (data.affectedRows > 0) {
            return { message: `${data.affectedRows} Rank added` };
          }
        });
      }
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

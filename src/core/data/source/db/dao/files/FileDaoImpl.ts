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

import { FileDao } from "./FileDao";
import { injectable, inject } from "inversify";
import { DatabaseContext } from "../../../remote-source/DatabaseContext";
import { IFile } from "../../../../../domain/entity/files/IFile";

/**
 * FileDaoImpl
 */
@injectable()
export class FileDaoImpl implements FileDao {
  private db: DatabaseContext;

  /**
   * @constructor
   * @param $db DatabaseContext instance required
   */
  constructor(@inject(DatabaseContext) $db: DatabaseContext) {
    this.db = $db;
  }

  saveFilePath(file: IFile): Promise<any> {
    let sql = `UPDATE ${file.type.table} SET Image = ? WHERE ${file.type.column} = ?`;
    return this.db
      .query(sql, [file.type.saveFilePath, file.identifier])
      .then(data => {
        return { message: `${data.affectedRows} record modified` };
      });
  }
}

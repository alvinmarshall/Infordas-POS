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

import { RankRepository } from "../../../domain/repository/RankRepository";
import { injectable, inject } from "inversify";
import { RemoteDataSource } from "../../RemoteDataSource";
import { RemoteDataSourceImpl } from "../../../remote-source/source/RemoteDataSourceImpl";
import { IRank } from "../../../domain/entity/rank/IRank";
/**
 * RankRepositoryImpl
 * class implements RankRepository {@Link ../../../domain/repository/RankRepository}
 */
@injectable()
export class RankRepositoryImpl implements RankRepository {
  private remoteDataSource: RemoteDataSource;

  /**
   * @constructor
   * @param $remoteDataSource require RemoteDataSource instance
   */
  constructor(
    @inject(RemoteDataSourceImpl) $remoteDataSource: RemoteDataSource
  ) {
    this.remoteDataSource = $remoteDataSource;
  }

  /**
   * AddRank
   * @param position type string
   */
  addRank(position: string): Promise<any> {
    return this.remoteDataSource.addRank(position);
  }
  /**
   * RemoveRank
   * @param id type string
   */
  removeRank(id: string): Promise<any> {
    return this.remoteDataSource.removeRank(id);
  }

  /**
   * UpdateRank
   * @param rank type IRank
   */
  updateRank(rank: IRank): Promise<any> {
    return this.remoteDataSource.updateRank(rank);
  }
}

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
import { BaseUseCase } from "../base/BaseUseCase";
import { RankRepository } from "../../repository/RankRepository";
import { injectable, inject } from "inversify";
import { RankRepositoryImpl } from "../../../data/repository/rank/RankRepositoryImpl";
import { IRank } from "../../entity/rank/IRank";

/**
 * UpdateRankTask
 * class extends BaseUseCase {@Link ../base/BaseUseCase}
 */
@injectable()
export class UpdateRankTask extends BaseUseCase<any, IRank> {
  private rankRepository: RankRepository;

  /**
   *@constructor
   * @param $rankRepository require RankRepository instance
   */
  constructor(@inject(RankRepositoryImpl) $rankRepository: RankRepository) {
    super();
    this.rankRepository = $rankRepository;
  }

  protected generateUseCase(input?: IRank | undefined): Promise<any> {
    if (input == null) throw new Error("rank update params can't be null");
    return this.rankRepository.updateRank(input);
  }
}

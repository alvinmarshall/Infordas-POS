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

import "reflect-metadata";
import { UpdateRankTask } from "../../../src/core/domain/useCase/rank/UpdateRankTask";
import { RankRepository } from "../../../src/core/domain/repository/RankRepository";
import { when, mock, instance, verify } from "ts-mockito";
import { TestRankGenerator } from "../../utils/TestRankGenerator";
import { assert, expect } from "chai";

describe("domain.useCase.rank UpdateRankTask test", () => {
  let updateRankTank: UpdateRankTask;
  let rankRepository: RankRepository;
  let rankRepositoryInstance: RankRepository;

  beforeEach(() => {
    rankRepository = mock<RankRepository>();
    rankRepositoryInstance = instance(rankRepository);
    updateRankTank = new UpdateRankTask(rankRepositoryInstance);
  });

  it("Update Rank with params success", async () => {
    let rank = TestRankGenerator.create();
    const actual = { message: "1 item updated" };
    when(rankRepository.updateRank(rank)).thenResolve(actual);
    const expected = await updateRankTank.buildUseCase(rank);
    assert.equal(expected, actual);
  });

  it("Update Rank with null params throws exception", () => {
    const errorMsg = "rank update params can't be null";
    expect(() => {
      updateRankTank.buildUseCase();
    }).throws(errorMsg);
  });
});

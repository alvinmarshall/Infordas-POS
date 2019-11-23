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

import { GetRankTask } from "../../../src/core/domain/useCase/rank/GetRankTask";
import { RankRepository } from "../../../src/core/domain/repository/RankRepository";
import { mock, instance, when, verify } from "ts-mockito";
import { TestRankGenerator } from "../../utils/TestRankGenerator";
import { assert } from "chai";

describe("domain.useCase.rank GetRankTask test", () => {
  let getRankTask: GetRankTask;
  let rankRepository: RankRepository;
  let rankRepositoryInstance: RankRepository;

  beforeEach(() => {
    rankRepository = mock<RankRepository>();
    rankRepositoryInstance = instance(rankRepository);
    getRankTask = new GetRankTask(rankRepositoryInstance);
  });

  it("Get all ranks with no params success", async () => {
    const actual = TestRankGenerator.getRankList();
    when(rankRepository.getRanks()).thenResolve(actual);
    const expected = await getRankTask.buildUseCase();
    assert.equal(expected, actual);
    verify(rankRepository.getRanks()).called();
    verify(rankRepository.getRankWithIdentifier("")).never();
  });
  
  it("Get rank with params success", async () => {
    const identifier = "1";
    const actual = TestRankGenerator.getRank();
    when(rankRepository.getRankWithIdentifier(identifier)).thenResolve(actual);
    const expected = await getRankTask.buildUseCase(identifier);
    assert.equal(expected, actual);
    verify(rankRepository.getRankWithIdentifier(identifier)).called();
    verify(rankRepository.getRanks()).never();
  });
});

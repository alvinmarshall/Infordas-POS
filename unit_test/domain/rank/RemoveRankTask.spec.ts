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
import { RemoveRankTask } from "../../../src/core/domain/useCase/rank/RemoveRankTask";
import { mock, instance, when } from "ts-mockito";
import { RankRepository } from "../../../src/core/domain/repository/RankRepository";
import { assert, expect } from "chai";

describe("domain.useCase.rank RemoveRankTask test", () => {
  let removeRankTask: RemoveRankTask;
  let rankRepository: RankRepository;
  let rankRepositoryInstance: RankRepository;

  beforeEach(() => {
    rankRepository = mock<RankRepository>();
    rankRepositoryInstance = instance(rankRepository);
    removeRankTask = new RemoveRankTask(rankRepositoryInstance);
  });

  it("Remove Rank with id success", async () => {
    let rankId = "test id"
    const actual = "1 item remove";
    when(rankRepository.removeRank(rankId)).thenResolve(actual);
    const expected = await removeRankTask.buildUseCase(rankId);
    assert.equal(expected, actual);
  });

  it("Remove Rank with null params throws exception", () => {
    const errorMsg = "id can't null";
    expect(() => {
      removeRankTask.buildUseCase();
    }).throw(errorMsg);
  });
});

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
import { RankRepository } from "../../../src/core/domain/repository/RankRepository";
import { AddRankTask } from "../../../src/core/domain/useCase/rank/AddRankTask";
import { mock, instance, when } from "ts-mockito";
import { TestRankGenerator } from "../../utils/TestRankGenerator";
import { expect, assert } from "chai";

describe("domain.useCase.rank AddRank test", () => {
  let rankRepository: RankRepository;
  let rankRepositoryInstance: RankRepository;
  let addRankTask: AddRankTask;
  beforeEach(() => {
    rankRepository = mock<RankRepository>();
    rankRepositoryInstance = instance(rankRepository);
    addRankTask = new AddRankTask(rankRepositoryInstance);
  });

  it("Add new rank success", async () => {
    let rank = TestRankGenerator.create();
    let actual = { message: "1 record inserted" };
    when(rankRepository.addRank(rank)).thenResolve(actual);
    const expected = await addRankTask.buildUseCase(rank);
    assert.equal(expected, actual);
  });

  it("Add new rank with null params throws exception", () => {
    const errorMsg = "position can't be null";
    expect(() => {
      addRankTask.buildUseCase();
    }).throw(errorMsg);
  });
});

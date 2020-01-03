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

import { RankRepositoryImpl } from "../../src/core/data/repository/rank/RankRepositoryImpl";
import { RemoteDataSource } from "../../src/core/data/source/remote-source/RemoteDataSource";
import { when, mock, instance, verify } from "ts-mockito";
import { TestRankGenerator } from "../utils/TestRankGenerator";
import { assert } from "chai";

describe("data.repository.rank RankRepositoryImpl test", () => {
  let remoteDataSource: RemoteDataSource;
  let remoteDataSourceInstance: RemoteDataSource;
  let rankRepositoryImpl: RankRepositoryImpl;

  beforeEach(() => {
    remoteDataSource = mock<RemoteDataSource>();
    remoteDataSourceInstance = instance(remoteDataSource);
    rankRepositoryImpl = new RankRepositoryImpl(remoteDataSourceInstance);
  });

  it("addRank success", async () => {
    let rank = TestRankGenerator.create();
    const actual = { message: "1 item inserted" };
    when(remoteDataSource.addRank(rank)).thenResolve(actual);
    const expected = await rankRepositoryImpl.addRank(rank);
    assert.equal(expected, actual);
    verify(remoteDataSource.addRank(rank)).called();
  });

  it("removeRank success", async () => {
    let rankId = TestRankGenerator.getRanks().id?.toString()
    const actual = "1 item remove";
    when(remoteDataSource.removeRank(rankId!)).thenResolve(actual);
    const expected = await rankRepositoryImpl.removeRank(rankId!);
    assert.equal(expected, actual);
    verify(remoteDataSource.removeRank(rankId!)).called();
    
  });

  it("updateRank success", async () => {
    let rank = TestRankGenerator.create();
    const actual = { message: "1 item updated" };
    when(
      remoteDataSource.updateRank(rank)
    ).thenResolve(actual);
    const expected = await rankRepositoryImpl.updateRank(rank);
    assert.equal(expected, actual);
    verify(
      remoteDataSource.updateRank(rank)
    ).called();
  });
});

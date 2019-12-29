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
import { TestUserGeneratorTest } from "../utils/TestUserGenerator";
import { UserRepositoryImpl } from "../../src/core/data/repository/user/UserRepositoryImpl";
import { RemoteDataSource } from "../../src/core/data/source/remote-source/RemoteDataSource";
import { mock, instance, when } from "ts-mockito";
import { assert } from "chai";

describe("data.repository UserRepository UserRepositoryImpl test", () => {
  let remoteDataSource: RemoteDataSource;
  let remoteInstance: RemoteDataSource;
  let userRepositoryImpl: UserRepositoryImpl;

  beforeEach(() => {
    remoteDataSource = mock<RemoteDataSource>();
    remoteInstance = instance(remoteDataSource);
    userRepositoryImpl = new UserRepositoryImpl(remoteInstance);
  });

  it("Get user data with credentials success", async () => {
    const actual = TestUserGeneratorTest.getUserInfo();
    let username = actual.username;
    let password = actual.password;
    when(
      remoteDataSource.getUserWithCredentials(username,password)
    ).thenResolve(actual);

    const expected = await userRepositoryImpl.getUserWithCredentials(
      username,
      password
    );
    assert.equal(expected, actual);
  });

  it("Add a new user success", async () => {
    const actual = "1 record inserted";
    const user = TestUserGeneratorTest.createUser();

    when(remoteDataSource.addNewUser(user)).thenResolve(actual);

    const expected = await userRepositoryImpl.addAUser(user);
    assert.equal(expected, actual);
  });
});

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
import { GetAuthenticationTask } from "../../../src/core/domain/useCase/user/GetAuthenticationTask";
import { mock, when, instance } from "ts-mockito";
import { expect, assert } from "chai";
import { UserRepository } from "../../../src/core/domain/repository/UserRepository";
import { TestUserGeneratorTest } from "../../utils/TestUserGenerator";

describe("Domain.useCase.user GetAuthenticationTask test", () => {
  let getAuthenticatinTask: GetAuthenticationTask;
  let userRepository: UserRepository;
  let userRepoInstance: UserRepository;
  beforeEach(() => {
    userRepository = mock<UserRepository>();
    userRepoInstance = instance(userRepository);
    getAuthenticatinTask = new GetAuthenticationTask(userRepoInstance);
  });

  it("Authenticate User with credentials return data success", async () => {
    const results = TestUserGeneratorTest.getUserInfo();
    let username = results.username;
    let password = results.password;
    when(userRepository.getUserWithCredentials(username, password)).thenResolve(
      results
    );

    const expected = await getAuthenticatinTask.buildUseCase({
      username,
      password
    });
    assert.equal(expected, results);
  });

  it("Authentication with null credentials throws exception", () => {
    expect(() => {
      getAuthenticatinTask.buildUseCase();
    }).throw("credentials can't be null");
  });
});

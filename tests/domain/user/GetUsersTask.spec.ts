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

import { GetUsersTask } from "../../../src/core/domain/useCase/user/GetUsersTask";
import { UserRepository } from "../../../src/core/domain/repository/UserRepository";
import { mock, instance, when, verify } from "ts-mockito";
import { TestUserGeneratorTest } from "../../utils/TestUserGenerator";
import { assert } from "chai";

describe("domain.useCase.users GetUsersTask test", () => {
  let getUsersTask: GetUsersTask;
  let userRepository: UserRepository;
  let userRepositoryInstance: UserRepository;

  beforeEach(() => {
    userRepository = mock<UserRepository>();
    userRepositoryInstance = instance(userRepository);
    getUsersTask = new GetUsersTask(userRepositoryInstance);
  });

  it("Get All users with no params success", async () => {
    const actual = TestUserGeneratorTest.getUserList();
    when(userRepository.getUsers()).thenResolve(actual);
    const expected = await getUsersTask.buildUseCase();
    assert.equal(expected, actual);
    verify(userRepository.getUsers()).called();
    verify(userRepository.getUserWithIdentifier("")).never();
  });

  it("Get user with params success", async () => {
    const identifier = "1";
    const actual = TestUserGeneratorTest.getUser();
    when(userRepository.getUserWithIdentifier(identifier)).thenResolve(actual);
    const expected = await getUsersTask.buildUseCase(identifier);
    assert.equal(expected, actual);
    verify(userRepository.getUserWithIdentifier(identifier)).called();
    verify(userRepository.getUsers()).never();
  });
});

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

import 'reflect-metadata'
import { mock, when, instance } from "ts-mockito";
import { AddAUserTask } from "../../../src/core/domain/useCase/user/AddAUserTask";
import { UserRepository } from "../../../src/core/domain/repository/UserRepository";
import { TestUserGeneratorTest } from "../../utils/TestUserGenerator";
import { assert, expect } from "chai";

describe("domain.useCase.user AddAUserTask test", () => {
  let userRepository: UserRepository;
  let userRepositoryInstance: UserRepository;
  let addAUserTask: AddAUserTask;
  beforeEach(() => {
    userRepository = mock<UserRepository>();
    userRepositoryInstance = instance(userRepository);
    addAUserTask = new AddAUserTask(userRepositoryInstance);
  });

  it("Add a new user success", async () => {
    const user = TestUserGeneratorTest.createUser();
    const actual = "1 record inserted";
    when(userRepository.addAUser(user)).thenResolve(actual);
    const expected = await addAUserTask.buildUseCase(user);
    assert.equal(expected, actual);
  });

  it("Add a new user with null params throws exception", () => {
    const errorMsg = "user params can't be null";
    expect(() => {
      addAUserTask.buildUseCase();
    }).throw(errorMsg);
  });
});

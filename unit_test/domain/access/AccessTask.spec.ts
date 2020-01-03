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
import { AccessTask } from "../../../src/core/domain/useCase/access/AccessTask";
import { UserRepository } from "../../../src/core/domain/repository/UserRepository";
import { mock, instance, when, verify } from "ts-mockito";
import { TestUserGeneratorTest } from "../../utils/TestUserGenerator";
import { assert, expect } from "chai";

describe("domain.useCase.access AccessTask test", () => {
  let accessTask: AccessTask;
  let userRepository: UserRepository;
  let userRepositoryInstance: UserRepository;

  beforeEach(() => {
    userRepository = mock<UserRepository>();
    userRepositoryInstance = instance(userRepository);
    accessTask = new AccessTask(userRepositoryInstance);
  });

  it("Set user login access success", async () => {
    const access = TestUserGeneratorTest.setUserAccess();
    const actual = { message: "Login success" };
    when(userRepository.setUserAccess(access)).thenResolve(actual);
    const expected = await accessTask.buildUseCase(access);
    assert.equal(expected, actual);
    verify(userRepository.setUserAccess(access)).called();
  });

  it("Set user login with null params throws exception", () => {
    const errorMsg = "ccess params can't be null";
    expect(() => {
      accessTask.buildUseCase();
    }).throw(errorMsg);
  });
});

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
import "reflect-metadata"
import { GetUserWithIdentifierTask } from "../../../src/core/domain/useCase/user/GetUserWithIdentifierTask";
import { UserRepository } from "../../../src/core/domain/repository/UserRepository";
import { mock, instance, when, verify } from "ts-mockito";
import { TestUserGeneratorTest } from "../../utils/TestUserGenerator";
import { assert, expect } from "chai";

describe("domain.useCase.user GetUserWithIdentifierTask test", () => {
  let getUserWithIdentifierTask: GetUserWithIdentifierTask;
  let userRepository: UserRepository;
  let userRepositoryInstance: UserRepository;

  beforeEach(() => {
    userRepository = mock<UserRepository>();
    userRepositoryInstance = instance(userRepository);
    getUserWithIdentifierTask = new GetUserWithIdentifierTask(
      userRepositoryInstance
    );
  });

  it("Get user data with identifier success", async () => {
    const actual = TestUserGeneratorTest.getUser();
    const identifier = actual.$uuid;
    when(userRepository.getUserWithIdentifier(identifier)).thenResolve(actual);
    const expected = await getUserWithIdentifierTask.buildUseCase(identifier);
    assert.equal(expected, actual);
    verify(userRepository.getUserWithIdentifier(identifier)).called();
  });

  it("Get user data with null params throws exception", async () => {
    const errorMsg = "identifier can't be null";
    expect(() => {
      getUserWithIdentifierTask.buildUseCase();
    }).throw(errorMsg);
  });
});

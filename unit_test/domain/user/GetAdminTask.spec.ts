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

import { mock, instance, when, verify } from "ts-mockito";
import { assert } from "chai";
import { UserRepository } from "../../../src/core/domain/repository/UserRepository";
import { TestUserGeneratorTest } from "../../utils/TestUserGenerator";
import { GetAdminTask } from "../../../src/core/domain/useCase/user/GetAdminTask";

describe("domain.useCase.users GetUsersTask test", () => {
  let getAdminTask: GetAdminTask;
  let userRepository: UserRepository;
  let userRepositoryInstance: UserRepository;

  beforeEach(() => {
    userRepository = mock<UserRepository>();
    userRepositoryInstance = instance(userRepository);
    getAdminTask = new GetAdminTask(userRepositoryInstance);
  });

  it("Get All admins with no params success", async () => {
    const actual = TestUserGeneratorTest.getUserList();
    when(userRepository.getAdmins()).thenResolve(actual);
    const expected = await getAdminTask.buildUseCase();
    assert.equal(expected, actual);
    verify(userRepository.getAdmins()).called();
    verify(userRepository.getAdminWithIdentifier("")).never();
  });

  it("Get admin with params success", async () => {
    const identifier = "1";
    const actual = TestUserGeneratorTest.getUser();
    when(userRepository.getAdminWithIdentifier(identifier)).thenResolve(actual);
    const expected = await getAdminTask.buildUseCase(identifier);
    assert.equal(expected, actual);
    verify(userRepository.getAdminWithIdentifier(identifier)).called();
    verify(userRepository.getAdmins()).never();
  });
});

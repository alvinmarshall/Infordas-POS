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
import { UpdateBranchTask } from "../../../src/core/domain/useCase/branch/UpdateBranchTask";
import { CompanyRepository } from "../../../src/core/domain/repository/CompanyRepository";
import { mock, instance, when, verify } from "ts-mockito";
import { TestCompanyGenerator } from "../../utils/TestCompanyGenerator";
import { assert, expect } from "chai";

describe("domain.useCase.branch UpdateBranchTask test", () => {
  let updateBranchTask: UpdateBranchTask;
  let companyRepository: CompanyRepository;
  let companyRepositoryInstance: CompanyRepository;

  beforeEach(() => {
    companyRepository = mock<CompanyRepository>();
    companyRepositoryInstance = instance(companyRepository);
    updateBranchTask = new UpdateBranchTask(companyRepositoryInstance);
  });

  it("Update branch with params success", async () => {
    const updaeBranch = TestCompanyGenerator.createBranch();
    const actual = { message: "1 record modified" };
    when(companyRepository.updateBranch(updaeBranch)).thenResolve(actual);
    const expected = await updateBranchTask.buildUseCase(updaeBranch);
    assert.equal(expected, actual);
    verify(companyRepository.updateBranch(updaeBranch)).called();
  });

  it("Update branch with null params throws exception", () => {
    const errorMsg = "update branch params can't be null";
    expect(() => {
      updateBranchTask.buildUseCase();
    }).throw(errorMsg);
  });
});

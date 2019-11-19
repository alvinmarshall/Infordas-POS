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
import { AddBranchTask } from "../../../src/core/domain/useCase/branch/AddBranchTask";
import { CompanyRepository } from "../../../src/core/domain/repository/CompanyRepository";
import { mock, instance, when } from "ts-mockito";
import { TestCompanyGenerator } from "../../utils/TestCompanyGenerator";
import { assert, expect } from "chai";

describe("domain.useCase.branch AddBranchTask test", () => {
  let addBranchTask: AddBranchTask;
  let companyRepository: CompanyRepository;
  let companyRepositoryInstance: CompanyRepository;

  beforeEach(() => {
    companyRepository = mock<CompanyRepository>();
    companyRepositoryInstance = instance(companyRepository);
    addBranchTask = new AddBranchTask(companyRepositoryInstance);
  });

  it("Add new Branch with params success", async () => {
    const branch = TestCompanyGenerator.createBranch();
    const actual = { message: "1 record inserted" };
    when(companyRepository.addNewBranch(branch)).thenResolve(actual);
    const expected = await addBranchTask.buildUseCase(branch);
    assert.equal(expected, actual);
  });

  it("Add new Branch with null params throws exception", () => {
    const errorMsg = "";
    expect(() => {
      addBranchTask.buildUseCase();
    }).throw(errorMsg);
  });
});

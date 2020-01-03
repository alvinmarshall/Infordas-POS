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

import { GetBranchTask } from "../../../src/core/domain/useCase/branch/GetBranchTask";
import { CompanyRepository } from "../../../src/core/domain/repository/CompanyRepository";
import { mock, instance, when, verify } from "ts-mockito";
import { TestCompanyGenerator } from "../../utils/TestCompanyGenerator";
import { assert } from "chai";

describe("domain.useCase.branch GetBranchTask test", () => {
  let getBranchTask: GetBranchTask;
  let companyRepository: CompanyRepository;
  let companyRepositoryInstance: CompanyRepository;

  beforeEach(() => {
    companyRepository = mock<CompanyRepository>();
    companyRepositoryInstance = instance(companyRepository);
    getBranchTask = new GetBranchTask(companyRepositoryInstance);
  });

  it("Get All Branches with no params success", async () => {
    const actual = TestCompanyGenerator.getBranchList();
    when(companyRepository.getBranchs()).thenResolve(actual);
    const expected = await getBranchTask.buildUseCase();
    assert.equal(expected, actual);
    verify(companyRepository.getBranchs()).called();
    verify(companyRepository.getBranchWithIdentifier("")).never();
  });

  it("Get Branch with identifier success", async () => {
    const identifier = "1";
    const actual = TestCompanyGenerator.getBranch();
    when(companyRepository.getBranchWithIdentifier(identifier)).thenResolve(actual);
    const expected = await getBranchTask.buildUseCase(identifier);
    assert.equal(expected, actual);
    verify(companyRepository.getBranchWithIdentifier(identifier)).called();
    verify(companyRepository.getBranchs()).never();
  });
});

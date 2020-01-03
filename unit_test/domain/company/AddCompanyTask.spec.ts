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
import { AddCompanyTask } from "../../../src/core/domain/useCase/company/AddCompanyTask";
import { CompanyRepository } from "../../../src/core/domain/repository/CompanyRepository";
import { mock, instance, when } from "ts-mockito";
import { TestCompanyGenerator } from "../../utils/TestCompanyGenerator";
import { assert, expect } from "chai";

describe("domain.useCase.company AddCompany test", () => {
  let companyRepository: CompanyRepository;
  let companyRepositoryInstance: CompanyRepository;
  let addCompanyTask: AddCompanyTask;

  beforeEach(() => {
    companyRepository = mock<CompanyRepository>();
    companyRepositoryInstance = instance(companyRepository);
    addCompanyTask = new AddCompanyTask(companyRepositoryInstance);
  });

  it("Add new company success", async () => {
    const company = TestCompanyGenerator.create();
    const actual = { message: "1 record inserted" };
    when(companyRepository.addNewCompany(company)).thenResolve(actual);
    const expected = await addCompanyTask.buildUseCase(company);
    assert.equal(expected, actual);
  });

  it("Add new company with null params throws exception", () => {
    const errorMsg = "company object can't be null";
    expect(() => {
      addCompanyTask.buildUseCase();
    }).throw(errorMsg);
  });
});

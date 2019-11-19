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
import { UpdateCompanyTask } from "../../../src/core/domain/useCase/company/UpdateCompanyTask";
import { CompanyRepository } from "../../../src/core/domain/repository/CompanyRepository";
import { mock, instance, when } from "ts-mockito";
import { TestCompanyGenerator } from "../../utils/TestCompanyGenerator";
import { expect } from "chai";

describe("domain.useCase.company UpdateCompanyTask test", () => {
  let updateCompanyTask: UpdateCompanyTask;
  let companyRepository: CompanyRepository;
  let companyRepositoryInstance: CompanyRepository;

  beforeEach(() => {
    companyRepository = mock<CompanyRepository>();
    companyRepositoryInstance = instance(companyRepository);
    updateCompanyTask = new UpdateCompanyTask(companyRepositoryInstance);
  });

  it("Update company with params success", async () => {
    const updateComp = TestCompanyGenerator.create();
    const actual = { message: "company update success" };
    when(companyRepository.updateCompany(updateComp)).thenResolve(actual);
    const expected = await updateCompanyTask.buildUseCase(updateComp);
  });

  it("Update company with null params throws exception", () => {
    const errorMsg = "company object can't be null";
    expect(() => {
      updateCompanyTask.buildUseCase();
    }).throw(errorMsg);
  });
});

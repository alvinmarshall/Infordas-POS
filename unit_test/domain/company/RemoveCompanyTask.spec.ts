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
import { RemoveCompanyTask } from "../../../src/core/domain/useCase/company/RemoveCompanyTask";
import { CompanyRepository } from "../../../src/core/domain/repository/CompanyRepository";
import { verify, mock, instance, when } from "ts-mockito";
import { expect } from "chai";

describe("domain.useCase.company RemoveCompanyTask test", () => {
  let removeCompanyTask: RemoveCompanyTask;
  let companyRepository: CompanyRepository;
  let companyRepositoryInstance: CompanyRepository;

  beforeEach(() => {
    companyRepository = mock<CompanyRepository>();
    companyRepositoryInstance = instance(companyRepository);
    removeCompanyTask = new RemoveCompanyTask(companyRepositoryInstance);
  });

  it("Remove comapny with identifier success", () => {
    const identifier = "1";
    const actual = { message: "1 record removed" };
    when(companyRepository.removeCompany(identifier)).thenResolve(actual);
    removeCompanyTask.buildUseCase(identifier);
    verify(companyRepository.removeCompany(identifier)).called();
  });

  it("Remove comapny with null identifier throws exception", () => {
    const errorMsg = "identifier can't be null";
    expect(() => {
      removeCompanyTask.buildUseCase();
    }).throw(errorMsg);
  });
});

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
import { RemoveBranchTask } from "../../../src/core/domain/useCase/branch/RemoveBranchTask";
import { CompanyRepository } from "../../../src/core/domain/repository/CompanyRepository";
import { mock, instance, when, verify } from "ts-mockito";
import { assert, expect } from "chai";

describe("domain.useCase.branch RemoveBranchTask test", () => {
  let removeBranchTask: RemoveBranchTask;
  let companyRepository: CompanyRepository;
  let companyRepositoryInstance: CompanyRepository;

  beforeEach(() => {
    companyRepository = mock<CompanyRepository>();
    companyRepositoryInstance = instance(companyRepository);
    removeBranchTask = new RemoveBranchTask(companyRepositoryInstance);
  });

  it("Remove branch with identifier success", async () => {
    const identifier = "1";
    const actual = { messsage: "1 item deleted" };
    when(companyRepository.removeBranch(identifier)).thenResolve(actual);
    const expected = await removeBranchTask.buildUseCase(identifier);
    assert.equal(expected, actual);
    verify(companyRepository.removeBranch(identifier)).called();
  });

  it("Remove branch with null params throw exception", async () => {
    const errorMsg = "identifier can't be null";
    expect(() => {
      removeBranchTask.buildUseCase();
    }).throw(errorMsg);
  });
});

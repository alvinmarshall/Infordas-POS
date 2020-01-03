
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

import { CrmRepository } from "../../../src/core/domain/repository/CrmRepository";
import { AddClientTask } from "../../../src/core/domain/useCase/crm/AddClientTask";
import { mock, instance, when, verify } from "ts-mockito";
import { TestCrmGenerator } from "../../utils/TestCrmGenerator";
import { assert, expect } from "chai";

describe("domain.useCase.crm AddClientTask test", () => {
  let crmRepository: CrmRepository;
  let crmRepositoryInstance: CrmRepository;
  let addClientTask: AddClientTask;

  beforeEach(() => {
    crmRepository = mock<CrmRepository>();
    crmRepositoryInstance = instance(crmRepository);
    addClientTask = new AddClientTask(crmRepositoryInstance);
  });

  it("Add customer with params success", async () => {
    const customer = TestCrmGenerator.customer();
    const actual = "1 item inserted";
    when(crmRepository.addCustomer(customer)).thenResolve(actual);
    const expected = await addClientTask.buildUseCase(customer);
    assert.equal(actual, expected);
    verify(crmRepository.addCustomer(customer)).times(1);
    verify(crmRepository.addSupplier(customer)).never();
  });

  it("Add supplier with params success", async () => {
    const supplier = TestCrmGenerator.supplier();
    const actual = "1 item inserted";
    when(crmRepository.addSupplier(supplier)).thenResolve(actual);
    const expected = await addClientTask.buildUseCase(supplier);
    assert.equal(actual, expected);
    verify(crmRepository.addSupplier(supplier)).times(1);
    verify(crmRepository.addCustomer(supplier)).never();
  });

  it("Add client with no params throws an exception", () => {
    const errorMsg = "client params can't be null";
    expect(() => {
      addClientTask.buildUseCase();
    }).throw(errorMsg);
  });

  it("Add client with no client type throws an exception", () => {
    const client = TestCrmGenerator.supplier();
    client.type = undefined;
    const errorMsg = "client type not specified";
    expect(() => {
      addClientTask.buildUseCase(client);
    }).throw(errorMsg);
  });
});

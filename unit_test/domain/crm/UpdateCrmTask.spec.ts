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
import { mock, instance, when, verify } from "ts-mockito";
import { TestCrmGenerator } from "../../utils/TestCrmGenerator";
import { assert, expect } from "chai";
import { UpdateClientTask } from "../../../src/core/domain/useCase/crm/UpdateClientTask";

describe("domain.crm UpdateCrmTask Test", () => {
  let crmRepository: CrmRepository;
  let crmRepositoryInstance: CrmRepository;
  let updateClientTask: UpdateClientTask;

  beforeEach(() => {
    crmRepository = mock<CrmRepository>();
    crmRepositoryInstance = instance(crmRepository);
    updateClientTask = new UpdateClientTask(crmRepositoryInstance);
  });

  it("Update crm Customer success", async () => {
    const customer = TestCrmGenerator.customer();
    const actual = "1 item modified";
    when(crmRepository.updateCustomer(customer)).thenResolve(actual);
    const expected = await updateClientTask.buildUseCase(customer);
    assert.equal(actual, expected);
    verify(crmRepository.updateCustomer(customer)).once();
    verify(crmRepository.updateSupplier(customer)).never();
  });

  it("Update crm Supplier success", async () => {
    const supplier = TestCrmGenerator.supplier();
    const actual = "1 item modified";
    when(crmRepository.updateSupplier(supplier)).thenResolve(actual);
    const expected = await updateClientTask.buildUseCase(supplier);
    assert.equal(actual, expected);
    verify(crmRepository.updateSupplier(supplier)).once();
    verify(crmRepository.updateCustomer(supplier)).never();
  });

  it("Update crm client with no params throws an exception", () => {
    const errorMsg = "client params can't be null";
    expect(() => {
      updateClientTask.buildUseCase();
    }).throw(errorMsg);
  });

  it("Update crm client with no Crm_Type throws an exception", async () => {
    const actual = "client type not specified";
    try {
      const client = TestCrmGenerator.customer();
      client.type = undefined;
      await updateClientTask.buildUseCase(client);
    } catch (error) {
      const expected = error;
      assert.equal(actual, expected);
    }
  });
});

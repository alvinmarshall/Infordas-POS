
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
import { GetClientTask } from "../../../src/core/domain/useCase/crm/GetClientTask";
import { mock, instance, when, verify } from "ts-mockito";
import { TestCrmGenerator } from "../../utils/TestCrmGenerator";
import { IClientParams } from "../../../src/core/domain/entity/crm/IClientParams";
import { Client_Type } from "../../../src/common/constants";
import { assert, expect } from "chai";

describe("domain.useCase.crm GetClientTask test", () => {
  let crmRepository: CrmRepository;
  let crmRepositoryInstance: CrmRepository;
  let getClientTask: GetClientTask;

  beforeEach(() => {
    crmRepository = mock<CrmRepository>();
    crmRepositoryInstance = instance(crmRepository);
    getClientTask = new GetClientTask(crmRepositoryInstance);
  });

  it("Get all customers success", async () => {
    const actual = TestCrmGenerator.getCustomerList();
    const params: IClientParams = { type: Client_Type.CUSTOMER };
    when(crmRepository.getCustomer()).thenResolve(actual);
    const expected = await getClientTask.buildUseCase(params);
    assert.equal(actual, expected);
    verify(crmRepository.getCustomer()).times(1);
    verify(crmRepository.getSupplier()).never();
    verify(crmRepository.getCustomerWithIdentifier("")).never();
    verify(crmRepository.getSupplierWithIdentifier("")).never();
  });

  it("Get all supplier success", async () => {
    const actual = TestCrmGenerator.getCustomerList();
    const params: IClientParams = { type: Client_Type.SUPPLIER };
    when(crmRepository.getSupplier()).thenResolve(actual);
    const expected = await getClientTask.buildUseCase(params);
    assert.equal(actual, expected);
    verify(crmRepository.getSupplier()).times(1);
    verify(crmRepository.getCustomer()).never();
    verify(crmRepository.getCustomerWithIdentifier("")).never();
    verify(crmRepository.getSupplierWithIdentifier("")).never();
  });

  it("Get customer with params identifier success", async () => {
    const actual = TestCrmGenerator.getCustomer();
    const params: IClientParams = {
      type: Client_Type.CUSTOMER,
      identifier: "test uid"
    };
    when(
      crmRepository.getCustomerWithIdentifier(params.identifier!)
    ).thenResolve(actual);
    const expected = await getClientTask.buildUseCase(params);
    assert.equal(actual, expected);
    verify(crmRepository.getCustomerWithIdentifier(params.identifier!)).times(
      1
    );
    verify(crmRepository.getSupplier()).never();
    verify(crmRepository.getCustomer()).never();
    verify(crmRepository.getSupplierWithIdentifier("")).never();
  });

  it("Get supplier with params identifier success", async () => {
    const actual = TestCrmGenerator.getSupplier();
    const params: IClientParams = {
      type: Client_Type.SUPPLIER,
      identifier: "test uid"
    };
    when(
      crmRepository.getSupplierWithIdentifier(params.identifier!)
    ).thenResolve(actual);
    const expected = await getClientTask.buildUseCase(params);
    assert.equal(actual, expected);
    verify(crmRepository.getSupplierWithIdentifier(params.identifier!)).times(
      1
    );
    verify(crmRepository.getSupplier()).never();
    verify(crmRepository.getCustomerWithIdentifier(params.identifier!)).never();
    verify(crmRepository.getCustomer()).never();
  });

  it("Get client with no params throws an exception", () => {
    const errorMsg = "client params can't be null";
    expect(() => {
      getClientTask.buildUseCase();
    }).throw(errorMsg);
  });
});

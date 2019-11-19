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
import { AddEmployeeDetailTask } from "../../../src/core/domain/useCase/employee/AddEmployeeDetailTask";
import { EmployeeRepository } from "../../../src/core/domain/repository/EmployeeRepository";
import { mock, instance, when, verify } from "ts-mockito";
import { TestEmployeeGenerator } from "../../utils/TestEmployeeGenerator";
import { assert, expect } from "chai";

describe("domain.useCase.employee AddEmployeeDetailTask test", () => {
  let addemployeeDetailTask: AddEmployeeDetailTask;
  let employeeRepository: EmployeeRepository;
  let employeeRepositoryInstance: EmployeeRepository;

  beforeEach(() => {
    employeeRepository = mock<EmployeeRepository>();
    employeeRepositoryInstance = instance(employeeRepository);
    addemployeeDetailTask = new AddEmployeeDetailTask(
      employeeRepositoryInstance
    );
  });

  it("Add Employee Detail info with params success", async () => {
    const detailInfo = TestEmployeeGenerator.createDetailInfo();
    const actual = { message: "1 item inserted" };
    when(employeeRepository.addEmployeeDetailInfo(detailInfo)).thenResolve(
      actual
    );
    const expected = await addemployeeDetailTask.buildUseCase(detailInfo);
    assert.equal(expected, actual);
    verify(employeeRepository.addEmployeeDetailInfo(detailInfo)).called();
  });

  it("Add Employee Detail info with null params throws exception",  () => {
    const errorMsg = "employee details info params can't be null";
    expect(() => {
      addemployeeDetailTask.buildUseCase();
    }).throw(errorMsg);
  });


});

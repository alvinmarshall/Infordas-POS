import { UpdateEmployeeTask } from "../../../src/core/domain/useCase/employee/UpdateEmployeeTask";
import { EmployeeRepository } from "../../../src/core/domain/repository/EmployeeRepository";
import { mock, instance, when, verify } from "ts-mockito";
import { assert, expect } from "chai";
import { IEmployeeInfo } from "../../../src/core/domain/entity/employee/IEmployeeInfo";

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

describe("domain.useCase.employee UpdateEmployeeTask test", () => {
  let updateEmployeeTask: UpdateEmployeeTask;
  let employeeRepository: EmployeeRepository;
  let employeeRepositoryInstance: EmployeeRepository;
  beforeEach(() => {
    employeeRepository = mock<EmployeeRepository>();
    employeeRepositoryInstance = instance(employeeRepository);
    updateEmployeeTask = new UpdateEmployeeTask(employeeRepositoryInstance);
  });

  it("update employee with params success", async () => {
    const actual = "1 record modified";
    const employee:IEmployeeInfo = {uuid:"1"}
    when(employeeRepository.updateEmployee(employee)).thenResolve(actual);
    const expected = await updateEmployeeTask.buildUseCase(employee);
    assert.equal(expected, actual);
    verify(employeeRepository.updateEmployee(employee)).called();
  });

  it("update employee with no params throw exception", async () => {
    const errMsg = "dentifier can't be empty";
    expect(() => {
      updateEmployeeTask.buildUseCase();
    }).throw(errMsg);
  });
});

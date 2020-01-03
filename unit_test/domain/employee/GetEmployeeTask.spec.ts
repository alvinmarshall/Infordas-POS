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

import { GetEmployeeTask } from "../../../src/core/domain/useCase/employee/GetEmployeeTask";
import { EmployeeRepository } from "../../../src/core/domain/repository/EmployeeRepository";
import { mock, instance, when, verify } from "ts-mockito";
import { TestEmployeeGenerator } from "../../utils/TestEmployeeGenerator";
import { assert } from "chai";

describe("domain.useCase.employee GetEmployeeTask test", () => {
  let getEmployeeTask: GetEmployeeTask;
  let employeeRepository: EmployeeRepository;
  let employeeRepositoryInstance: EmployeeRepository;

  beforeEach(() => {
    employeeRepository = mock<EmployeeRepository>();
    employeeRepositoryInstance = instance(employeeRepository);
    getEmployeeTask = new GetEmployeeTask(employeeRepositoryInstance);
  });

  it("Get all employees with no params success", async () => {
    const actual = TestEmployeeGenerator.getEmployeeList();
    when(employeeRepository.getEmployees()).thenResolve(actual);
    const expected = await getEmployeeTask.buildUseCase();
    assert.equal(expected, actual);
    verify(employeeRepository.getEmployees()).called();
    verify(employeeRepository.getEmployeeWithIdentifier("")).never();
  });

  it("Get employee with params success", async () => {
    const identifier = "1";
    const actual = TestEmployeeGenerator.getEmployee();
    when(employeeRepository.getEmployeeWithIdentifier(identifier)).thenResolve(
      actual
    );
    const expected = await getEmployeeTask.buildUseCase(identifier);
    assert.equal(expected, actual);
    verify(employeeRepository.getEmployees()).never();
    verify(employeeRepository.getEmployeeWithIdentifier(identifier)).called();
  });
});

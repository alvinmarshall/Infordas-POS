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
import { mock, instance, when, verify } from "ts-mockito";
import { GetEmployeeInfoTask } from "../../../src/core/domain/useCase/employee/GetEmployeeInfoTask";
import { EmployeeRepository } from "../../../src/core/domain/repository/EmployeeRepository";
import { TestEmployeeGenerator } from "../../../dist/tests/utils/TestEmployeeGenerator";
import { assert } from "chai";

describe("domain.useCase.employee GetEmployeeInfoTask test", () => {
  let getEmployeeInfoTask: GetEmployeeInfoTask;
  let employeeRepositoy: EmployeeRepository;
  let employeeRepositoyInstance: EmployeeRepository;
  beforeEach(() => {
    employeeRepositoy = mock<EmployeeRepository>();
    employeeRepositoyInstance = instance(employeeRepositoy);
    getEmployeeInfoTask = new GetEmployeeInfoTask(employeeRepositoyInstance);
  });
  it("Get Employee info with no params success", async () => {
    const actual = TestEmployeeGenerator.getEmployeeList();
    when(employeeRepositoy.getEmployeeInfo()).thenResolve(actual);
    const expected = await getEmployeeInfoTask.buildUseCase();
    assert.equal(expected, actual);
    verify(employeeRepositoy.getEmployeeInfo()).called();
    verify(employeeRepositoy.getEmployeeInfo("")).never();
  });
});

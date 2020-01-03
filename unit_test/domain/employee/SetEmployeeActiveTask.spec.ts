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
import 'reflect-metadata'
import { EmployeeRepository } from "../../../src/core/domain/repository/EmployeeRepository";
import { SetEmployeeActiveTask } from "../../../src/core/domain/useCase/employee/SetEmployeeActiveTask";
import { when, instance, mock } from "ts-mockito";
import { expect, assert } from "chai";
describe("domain.useCase.employee SetEmployeeActiveTask test", () => {
  let employeeRepository: EmployeeRepository;
  let employeeRepoInstance: EmployeeRepository;
  let setEmployeeActive: SetEmployeeActiveTask;

  beforeEach(() => {
    employeeRepository = mock<EmployeeRepository>();
    employeeRepoInstance = instance(employeeRepository);
    setEmployeeActive = new SetEmployeeActiveTask(employeeRepoInstance);
  });

  it("Update User Status from InActive to Active success", async () => {
    const params = {empId:"test empid",status:1}
    const actual = { message: `Employee Active` };
    when(employeeRepository.setEmployeeActive(params.empId,params.status)).thenResolve(actual);
    const expected = await setEmployeeActive.buildUseCase(params);
    assert.equal(expected, actual);
  });

  it("Update User Status from InActive to Active with null params throws exception", () => {
    const errorMsg = "set status params can't be null";
    expect(() => {
      setEmployeeActive.buildUseCase();
    }).throw(errorMsg);
  });
});

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

import "reflect-metadata";
import { EmployeeRepositoryImpl } from "../../src/core/data/repository/employee/EmployeeRepositoryImpl";
import { mock, instance, when } from "ts-mockito";
import { RemoteDataSource } from "../../src/core/data/RemoteDataSource";
import { TestEmployeeGenerator } from "../utils/TestEmployeeGenerator";
import { assert } from "chai";

describe("data.repository.employee EmployeeRepositoryImpl test", () => {
  let remoteDataSource: RemoteDataSource;
  let remoteDataSourceInstance: RemoteDataSource;
  let employeeRepositoryImpl: EmployeeRepositoryImpl;
  beforeEach(() => {
    remoteDataSource = mock<RemoteDataSource>();
    remoteDataSourceInstance = instance(remoteDataSource);
    employeeRepositoryImpl = new EmployeeRepositoryImpl(remoteDataSourceInstance);
  });

  it("Add new Employee success", async () => {
    const employee = TestEmployeeGenerator.newEmployee();
    const actual = "1 record inserted";
    when(remoteDataSource.addNewEmployee(employee)).thenResolve(actual);
    const expected = await employeeRepositoryImpl.addEmployee(employee);
    assert.equal(expected, actual);
  });

  it("Set Employee Account status to Active success", async () => {
    const activeStatus = 1;
    const params = { empId: "test uuid", status: activeStatus };
    const actual = { message: "Account status Active" };
    when(
      remoteDataSource.setActiveEmployee(params.empId, params.status)
    ).thenResolve(actual);
    const expected = await employeeRepositoryImpl.setEmployeeActive(
      params.empId,
      params.status
    );
    assert.equal(expected, actual);
  });
});

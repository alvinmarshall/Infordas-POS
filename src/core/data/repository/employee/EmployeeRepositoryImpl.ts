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

import { EmployeeRepository } from "../../../domain/repository/EmployeeRepository";
import { IEmployee } from "../../../domain/entity/employee/IEmployee";
import { IEmployeeOther } from "../../../domain/entity/employee/IEmployeeOther";
import { injectable, inject } from "inversify";
import { RemoteDataSource } from "../../RemoteDataSource";
import { RemoteDataSourceImpl } from "../../../remote-source/source/RemoteDataSourceImpl";

/**
 * EmployeeRepositoryImpl class
 * class implements EmployeeRepository {@Link ../../../domain/repository/EmployeeRepository}
 */
@injectable()
export class EmployeeRepositoryImpl implements EmployeeRepository {
  private remoteDataSource: RemoteDataSource;

  /**
   * @constructor
   * @param $remoteDataSource require RemoteDataSource instance
   */
  constructor(
    @inject(RemoteDataSourceImpl) $remoteDataSource: RemoteDataSource
  ) {
    this.remoteDataSource = $remoteDataSource;
  }

  setEmployeeActive(empId: string, status: number): Promise<any> {
    return this.remoteDataSource.setActiveEmployee(empId, status);
  }
  addEmployee(employeeInfo: IEmployee): Promise<any> {
    return this.remoteDataSource.addNewEmployee(employeeInfo);
  }
  addEmployeeDetailInfo(employeeDetail: IEmployeeOther): Promise<string> {
    return this.remoteDataSource.addEmployeeOtherInfo(employeeDetail);
  }
  getEmployees(): Promise<IEmployee[]> {
    return this.remoteDataSource.getEmployees();
  }
  getEmployeeWithIdentifier(identifier: string): Promise<IEmployee[]> {
    return this.remoteDataSource.getEmployeeWithIdentifier(identifier);
  }
}

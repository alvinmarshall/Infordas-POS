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

import { AddEmployeeTask } from "../../../core/domain/useCase/employee/AddEmployeeTask";
import { injectable, inject } from "inversify";
import { IEmployee } from "../../../core/domain/entity/employee/IEmployee";
import { SetEmployeeActiveTask } from "../../../core/domain/useCase/employee/SetEmployeeActiveTask";
import { AddEmployeeDetailTask } from "../../../core/domain/useCase/employee/AddEmployeeDetailTask";
import { IEmployeeOther } from "../../../core/domain/entity/employee/IEmployeeOther";
/**
 * EmployeeService class
 */
@injectable()
export class EmployeeService {
  private addEmployeeTask: AddEmployeeTask;
  private setEmployeeActiveTask: SetEmployeeActiveTask;
  private addEmployeeDetailTask: AddEmployeeDetailTask;

  /**
   * @constructor
   * @param $addEmployeeTask provide AddEmployeeTask instance
   * @param $setEmployeeActiveTask provide SetEmployeeActiveTask instance
   * @param $addEmployeeDetailTask  provide AddEmployeeDetailTask instance
   */
  constructor(
    @inject(AddEmployeeTask) $addEmployeeTask: AddEmployeeTask,
    @inject(SetEmployeeActiveTask)
    $setEmployeeActiveTask: SetEmployeeActiveTask,
    @inject(AddEmployeeDetailTask) $addEmployeeDetailTask: AddEmployeeDetailTask
  ) {
    this.addEmployeeTask = $addEmployeeTask;
    this.setEmployeeActiveTask = $setEmployeeActiveTask;
    this.addEmployeeDetailTask = $addEmployeeDetailTask;
  }

  /**
   * addNewEmployee
   * @param employee require IEmployee
   */
  addNewEmployee(employee: IEmployee): Promise<any> {
    return this.addEmployeeTask.buildUseCase(employee);
  }
  /**
   * setAccountStatus
   * @param empId require employee id type string
   * @param status requrie status type number
   */
  setAccountStatus(empId: string, status: number): Promise<any> {
    return this.setEmployeeActiveTask.buildUseCase({ empId, status });
  }

  /**
   * addEmployeeDetails
   * @param employeeDetail require IEmployeeOther
   */
  addEmployeeDetails(employeeDetail: IEmployeeOther): Promise<any> {
    return this.addEmployeeDetailTask.buildUseCase(employeeDetail);
  }
}

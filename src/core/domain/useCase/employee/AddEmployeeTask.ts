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



import { BaseUseCase } from "../base/BaseUseCase";
import { IEmployee } from "../../entity/employee/IEmployee";
import { injectable, inject } from "inversify";
import { EmployeeRepository } from "../../repository/EmployeeRepository";
import { EmployeeRepositoryImpl } from "../../../data/repository/employee/EmployeeRepositoryImpl";

/**
 * AddEmployeeTask class
 * class extends BaseUseCase {@Link ../base/BaseUseCase}
 */
@injectable()
export class AddEmployeeTask extends BaseUseCase<any, IEmployee> {
  private employeeRepository: EmployeeRepository;

  /**
   * @constructor
   * @param $employeeRepository require EmployeeRepository instance
   */
  constructor(
    @inject(EmployeeRepositoryImpl) $employeeRepository: EmployeeRepository
  ) {
    super();
    this.employeeRepository = $employeeRepository;
  }

  protected generateUseCase(input?: IEmployee | undefined): Promise<any> {
    if (input == null) throw new Error("employee info can't be null");
    return this.employeeRepository.addEmployee(input);
  }
}

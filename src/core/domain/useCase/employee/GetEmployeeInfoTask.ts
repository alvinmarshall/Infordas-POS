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
import { IEmployeeInfo } from "../../entity/employee/IEmployeeInfo";
import { EmployeeRepository } from "../../repository/EmployeeRepository";
import { injectable, inject } from "inversify";
import { EmployeeRepositoryImpl } from "../../../data/repository/employee/EmployeeRepositoryImpl";

/**
 * GetEmployeeInfoTask
 * super class BaseUseCase {@Link ../base/BaseUseCase}
 */
@injectable()
export class GetEmployeeInfoTask extends BaseUseCase<IEmployeeInfo[], string> {
  private employeeRepository: EmployeeRepository;

  constructor(
    @inject(EmployeeRepositoryImpl) $employeeRepository: EmployeeRepository
  ) {
    super();
    this.employeeRepository = $employeeRepository;
  }

  protected generateUseCase(
    input?: string | undefined
  ): Promise<IEmployeeInfo[]> {
    if (input == null) return this.employeeRepository.getEmployeeInfo();
    return this.employeeRepository.getEmployeeInfo(input);
  }
}

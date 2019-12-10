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
import { injectable, inject } from "inversify";
import { EmployeeRepository } from "../../repository/EmployeeRepository";
import { EmployeeRepositoryImpl } from "../../../data/repository/employee/EmployeeRepositoryImpl";
import { IEmployeeInfo } from "../../entity/employee/IEmployeeInfo";
@injectable()
export class UpdateEmployeeTask extends BaseUseCase<any, IEmployeeInfo> {
  private employeeRepository: EmployeeRepository;

  constructor(
    @inject(EmployeeRepositoryImpl) $employeeRepository: EmployeeRepository
  ) {
    super();
    this.employeeRepository = $employeeRepository;
  }

  protected generateUseCase(input?: IEmployeeInfo | undefined): Promise<any> {
    if (input == null) throw new Error("identifier can't be empty");
    return this.employeeRepository.updateEmployee(input);
  }
}

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
import { IBranch } from "../../entity/branch/IBranch";
import { injectable, inject } from "inversify";
import { CompanyRepository } from "../../repository/CompanyRepository";
import { CompanyRepositoryImpl } from "../../../data/repository/company/CompanyRepositoryImpl";

/**
 * AddBranchTask class
 * class extends BaseUseCase {@Link ../base/BaseUseCase}
 */
@injectable()
export class AddBranchTask extends BaseUseCase<any, IBranch> {
  private companyRepository: CompanyRepository;

  constructor(
    @inject(CompanyRepositoryImpl) $companyRepository: CompanyRepository
  ) {
    super();
    this.companyRepository = $companyRepository;
  }

  protected generateUseCase(input?: IBranch | undefined): Promise<any> {
    if (input == null) throw new Error("branch can't be null");
    return this.companyRepository.addNewBranch(input);
  }
}

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
import { ICompany } from "../../entity/company/ICompany";
import { CompanyRepository } from "../../repository/CompanyRepository";
import { injectable, inject } from "inversify";
import { CompanyRepositoryImpl } from "../../../data/repository/company/CompanyRepositoryImpl";

@injectable()
export class UpdateCompanyTask extends BaseUseCase<any, ICompany> {
  private companyRespository: CompanyRepository;

  constructor(
    @inject(CompanyRepositoryImpl) $companyRespository: CompanyRepository
  ) {
    super();
    this.companyRespository = $companyRespository;
  }

  protected generateUseCase(input?: ICompany | undefined): Promise<any> {
    if (input == null) throw new Error("company object can't be null");
    return this.companyRespository.updateCompany(input);
  }
}

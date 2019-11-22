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

import { CompanyRepository } from "../../../domain/repository/CompanyRepository";
import { ICompany } from "../../../domain/entity/company/ICompany";
import { RemoteDataSource } from "../../RemoteDataSource";
import { inject, injectable } from "inversify";
import { RemoteDataSourceImpl } from "../../../remote-source/source/RemoteDataSourceImpl";
import { IBranch } from "../../../domain/entity/branch/IBranch";

/**
 * CompanyRepositoryImpl class
 * class implements CompanyRepository {@Link ../../../domain/repository/CompanyRepository }
 */
@injectable()
export class CompanyRepositoryImpl implements CompanyRepository {
  private remoteDataSource: RemoteDataSource;

  /**
   *
   * @param $remoteDataSource require RemoteDataSource instance
   */
  constructor(
    @inject(RemoteDataSourceImpl) $remoteDataSource: RemoteDataSource
  ) {
    this.remoteDataSource = $remoteDataSource;
  }

  //
  // ─── COMPANY ────────────────────────────────────────────────────────────────────
  //

  addNewCompany(company: ICompany): Promise<any> {
    return this.remoteDataSource.addNewCompany(company);
  }
  updateCompany(company: ICompany): Promise<any> {
    return this.remoteDataSource.updateCompany(company);
  }
  removeCompany(identifier: string): Promise<any> {
    return this.remoteDataSource.removeCompany(identifier);
  }

  getCompany(): Promise<ICompany[]> {
    return this.remoteDataSource.getCompany();
  }
  getCompanyWithIdentifier(identifier: string): Promise<ICompany[]> {
    return this.remoteDataSource.getCompanyWithIdentifier(identifier);
  }
  //
  // ─── BRANCH ─────────────────────────────────────────────────────────────────────
  //

  addNewBranch(branch: IBranch): Promise<any> {
    return this.remoteDataSource.addNewBranch(branch);
  }
  updateBranch(branch: IBranch): Promise<any> {
    return this.remoteDataSource.updateBranch(branch);
  }
  removeBranch(identifier: string): Promise<any> {
    return this.remoteDataSource.removeBranch(identifier);
  }
  getBranchWithIdentifier(identifier: string): Promise<IBranch[]> {
    return this.remoteDataSource.getBranchWithIdentifier(identifier);
  }
  getBranchs(): Promise<IBranch[]> {
    return this.remoteDataSource.getBranchs();
  }
}

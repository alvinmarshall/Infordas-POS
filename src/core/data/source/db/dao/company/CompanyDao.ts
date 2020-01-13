
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

import { ICompany } from "../../../../../domain/entity/company/ICompany";

import { IBranch } from "../../../../../domain/entity/branch/IBranch";

export interface CompanyDao {
  //
  // ─── COMPANY ────────────────────────────────────────────────────────────────────
  //

  addCompany(company: ICompany): Promise<any>;
  updateCompany(company: ICompany): Promise<any>;
  removeCompany(identifier: string): Promise<any>;
  getCompany(): Promise<ICompany[]>;
  getCompanyWithIdentifier(identifier: string): Promise<ICompany[]>;

  //
  // ─── BRANCH ─────────────────────────────────────────────────────────────────────
  //
  addBranch(branch: IBranch): Promise<any>;
  updateBranch(branch: IBranch): Promise<any>;
  removeBranch(identifier: string): Promise<any>;
  getBranchWithIdentifier(identifier: string): Promise<IBranch[]>;
  getBranchs(): Promise<IBranch[]>;
}

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

import { ICompany } from "../entity/company/ICompany";
import { IBranch } from "../entity/branch/IBranch";

export interface CompanyRepository {
  //
  // ─── COMPANY ────────────────────────────────────────────────────────────────────
  //

  addNewCompany(company: ICompany): Promise<any>;
  updateCompany(company: ICompany): Promise<any>;
  removeCompany(identifier: string): Promise<any>;
  getCompanyWithIdentifier(identifier: string): Promise<Array<ICompany>>;
  getCompany(): Promise<Array<ICompany>>;

  //
  // ─── BRANCH ─────────────────────────────────────────────────────────────────────
  //

  addNewBranch(branch: IBranch): Promise<any>;
  updateBranch(branch: IBranch): Promise<any>;
  removeBranch(identifier: string): Promise<any>;
}

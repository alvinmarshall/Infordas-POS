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

import { UserEntity } from "../domain/entity/user/UserEntity";
import { IEmployee } from "../domain/entity/employee/IEmployee";
import { IUser } from "../domain/entity/user/IUser";
import { IRank } from "../domain/entity/rank/IRank";
import { ICompany } from "../domain/entity/company/ICompany";
import { IBranch } from "../domain/entity/branch/IBranch";
import { IEmployeeOther } from "../domain/entity/employee/IEmployeeOther";
import { IAccess } from "../domain/entity/access/IAccess";

export interface RemoteDataSource {
  //
  // ─── BRANCH ─────────────────────────────────────────────────────────────────────
  //
  addNewBranch(branch: IBranch): Promise<any>;
  updateBranch(branch: IBranch): Promise<any>;
  removeBranch(identifier: string): Promise<any>;

  //
  // ─── COMPANY ────────────────────────────────────────────────────────────────────
  //

  addNewCompany(company: ICompany): Promise<{}>;
  updateCompany(company: ICompany): Promise<any>;
  removeCompany(identifier: string): Promise<any>;
  getCompany(): Promise<ICompany[]>;
  getCompanyWithIdentifier(identifier: string): Promise<ICompany[]>;


  //
  // ─── USER ───────────────────────────────────────────────────────────────────────
  //

  getUserWithCredentials(
    username: string,
    password: string
  ): Promise<UserEntity>;

  getUserWithIdentifier(identifier: string): Promise<UserEntity>;

  //
  // ─── EMPLOYEE ───────────────────────────────────────────────────────────────────
  //

  addNewEmployee(employee: IEmployee): Promise<any>;
  setActiveEmployee(empId: string, status: number): Promise<any>;
  addEmployeeOtherInfo(employeeDetail: IEmployeeOther): Promise<any>;

  //
  // ─── RANK ───────────────────────────────────────────────────────────────────────
  //

  addRank(position: string): Promise<{}>;
  removeRank(id: string): Promise<{}>;
  updateRank(rank: IRank): Promise<{}>;

  //
  // ─── USER ───────────────────────────────────────────────────────────────────────
  //

  addNewUser(user: IUser): Promise<any>;
  setUserAccess(access: IAccess): Promise<any>;
}

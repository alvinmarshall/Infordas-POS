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

import { IEmployee } from "../../../domain/entity/employee/IEmployee";
import { IUser } from "../../../domain/entity/user/IUser";
import { IRank } from "../../../domain/entity/rank/IRank";
import { ICompany } from "../../../domain/entity/company/ICompany";
import { IBranch } from "../../../domain/entity/branch/IBranch";
import { IEmployeeOther } from "../../../domain/entity/employee/IEmployeeOther";
import { IAccess } from "../../../domain/entity/access/IAccess";
import { IFile } from "../../../domain/entity/files/IFile";
import { IEmployeeInfo } from "../../../domain/entity/employee/IEmployeeInfo";
import { IProduct } from "../../../domain/entity/product/IProduct";
import { ICategory } from "../../../domain/entity/product/ICategory";
import { IBrand } from "../../../domain/entity/product/IBrand";
import { IPurchase } from "../../../domain/entity/product/IPurchase";
import { IClient } from "../../../domain/entity/crm/IClient";

export interface RemoteDataSource {
  //
  // ─── CRM ────────────────────────────────────────────────────────────────────────
  //

  addCustomer(customer: IClient): Promise<any>;
  addSupplier(supplier: IClient): Promise<any>;
  getCustomer(): Promise<IClient[]>;
  getCustomerWithIdentifier(identifier: string): Promise<IClient[]>;
  getSupplier(): Promise<IClient[]>;
  getSupplierWithIdentifier(identifier: string): Promise<IClient[]>;

  //
  // ─── PRODUCT ────────────────────────────────────────────────────────────────────
  //

  addProduct(product: IProduct): Promise<any>;
  getProducts(): Promise<IProduct[]>;
  getProductWithIdentifier(identifier: string): Promise<IProduct[]>;
  updateProduct(product: IProduct): Promise<any>;
  removeProduct(identifier: string): Promise<any>;

  addCategory(category: ICategory): Promise<any>;
  updateCategory(category: ICategory): Promise<any>;
  getCategories(): Promise<ICategory[]>;
  getCategoryWithIdentifier(identifier: string): Promise<ICategory[]>;
  removeCategory(identifier: string): Promise<any>;

  addBrand(brand: IBrand): Promise<any>;
  getBrands(): Promise<IBrand[]>;
  getBrandWithIdentifier(identifier: string): Promise<IBrand[]>;
  updateBrand(brand: IBrand): Promise<any>;
  removeBrand(identifier: string): Promise<any>;

  addPurchase(purchase: IPurchase): Promise<any>;

  //
  // ─── FILE ───────────────────────────────────────────────────────────────────────
  //
  saveFile(file: IFile): Promise<any>;

  //
  // ─── BRANCH ─────────────────────────────────────────────────────────────────────
  //
  addNewBranch(branch: IBranch): Promise<any>;
  updateBranch(branch: IBranch): Promise<any>;
  removeBranch(identifier: string): Promise<any>;
  getBranchWithIdentifier(identifier: string): Promise<IBranch[]>;
  getBranchs(): Promise<IBranch[]>;

  //
  // ─── COMPANY ────────────────────────────────────────────────────────────────────
  //

  addNewCompany(company: ICompany): Promise<{}>;
  updateCompany(company: ICompany): Promise<any>;
  removeCompany(identifier: string): Promise<any>;
  getCompany(): Promise<ICompany[]>;
  getCompanyWithIdentifier(identifier: string): Promise<ICompany[]>;

  //
  // ─── EMPLOYEE ───────────────────────────────────────────────────────────────────
  //

  addNewEmployee(employee: IEmployee): Promise<any>;
  setActiveEmployee(empId: string, status: number): Promise<any>;
  addEmployeeOtherInfo(employeeDetail: IEmployeeOther): Promise<any>;
  getEmployees(): Promise<IEmployee[]>;
  getEmployeeWithIdentifier(identifier: string): Promise<IEmployee[]>;
  getEmployeeInfo(identifier?: string): Promise<IEmployeeInfo[]>;
  updateEmployee(employee: IEmployeeInfo): Promise<any>;

  //
  // ─── RANK ───────────────────────────────────────────────────────────────────────
  //

  addRank(rank: IRank): Promise<any>;
  removeRank(id: string): Promise<any>;
  updateRank(rank: IRank): Promise<any>;
  getRanks(): Promise<IRank[]>;
  getRankWithIdentifier(identifier: string): Promise<IRank[]>;

  //
  // ─── USER ───────────────────────────────────────────────────────────────────────
  //

  addNewUser(user: IUser): Promise<any>;
  setUserAccess(access: IAccess): Promise<any>;
  getUserWithCredentials(username: string, password: string): Promise<IUser>;
  getUserWithIdentifier(identifier: string): Promise<IUser[]>;
  getUsers(): Promise<IUser[]>;
}

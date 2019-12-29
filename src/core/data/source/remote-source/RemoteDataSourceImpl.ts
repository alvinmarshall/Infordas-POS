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

import { UserDao } from "../db/dao/user/UserDao";
import { RemoteDataSource } from "./RemoteDataSource";
import { injectable, inject } from "inversify";
import { UserDaoImpl } from "../db/dao/user/UserDaoImpl";
import { IEmployee } from "../../../domain/entity/employee/IEmployee";
import { EmployeeDao } from "../db/dao/employee/EmployeeDao";
import { EmployeeDaoImpl } from "../db/dao/employee/EmployeeDaoImpl";
import { IUser } from "../../../domain/entity/user/IUser";
import { RankDao } from "../db/dao/rank/RankDao";
import { RankDaoImpl } from "../db/dao/rank/RankDaoImpl";
import { IRank } from "../../../domain/entity/rank/IRank";
import { ICompany } from "../../../domain/entity/company/ICompany";
import { CompanyDao } from "../db/dao/company/CompanyDao";
import { CompanyDaoImpl } from "../db/dao/company/CompanyDaoImpl";
import { IBranch } from "../../../domain/entity/branch/IBranch";
import { IEmployeeOther } from "../../../domain/entity/employee/IEmployeeOther";
import { IAccess } from "../../../domain/entity/access/IAccess";
import { IFile } from "../../../domain/entity/files/IFile";
import { FileDao } from "../db/dao/files/FileDao";
import { FileDaoImpl } from "../db/dao/files/FileDaoImpl";
import { IEmployeeInfo } from "../../../domain/entity/employee/IEmployeeInfo";
import { IProduct } from "../../../domain/entity/product/IProduct";
import { ProductDao } from "../db/dao/product/ProductDao";
import { ProductDaoImpl } from "../db/dao/product/ProductDaoImpl";
import { ICategory } from "../../../domain/entity/product/ICategory";
import { IBrand } from "../../../domain/entity/product/IBrand";
import { IPurchase } from "../../../domain/entity/product/IPurchase";
import { IClient } from "../../../domain/entity/crm/IClient";
import { CrmDao } from "../db/dao/crm/CrmDao";
import { CrmDaoImpl } from "../db/dao/crm/CrmDaoImpl";

@injectable()
export class RemoteDataSourceImpl implements RemoteDataSource {
  private userDao: UserDao;
  private employeeDao: EmployeeDao;
  private rankDao: RankDao;
  private companyDao: CompanyDao;
  private fileDao: FileDao;
  private productDao: ProductDao;
  private crmDao: CrmDao;
  /**
   * @constructor
   * @param $userDao require UserDao instance
   * @param $employeeDao require EmployeeDao instance
   * @param $rankDao require RankDao instance
   */
  constructor(
    @inject(UserDaoImpl) $userDao: UserDao,
    @inject(EmployeeDaoImpl) $employeeDao: EmployeeDao,
    @inject(RankDaoImpl) $rankDao: RankDao,
    @inject(CompanyDaoImpl) $companyDao: CompanyDao,
    @inject(FileDaoImpl) $fileDao: FileDao,
    @inject(ProductDaoImpl) $productDao: ProductDao,
    @inject(CrmDaoImpl) $crmDao: CrmDao
  ) {
    this.userDao = $userDao;
    this.employeeDao = $employeeDao;
    this.rankDao = $rankDao;
    this.companyDao = $companyDao;
    this.fileDao = $fileDao;
    this.productDao = $productDao;
    this.crmDao = $crmDao;
  }

  //
  // ─── CRM ────────────────────────────────────────────────────────────────────────
  //

  addCustomer(customer: IClient): Promise<any> {
    return this.crmDao.addCustomer(customer);
  }
  addSupplier(supplier: IClient): Promise<any> {
    return this.crmDao.addSupplier(supplier);
  }
  getCustomer(): Promise<IClient[]> {
    return this.crmDao.getCustomer();
  }
  getCustomerWithIdentifier(identifier: string): Promise<IClient[]> {
    return this.crmDao.getCustomerWithIdentifier(identifier);
  }
  getSupplier(): Promise<IClient[]> {
    return this.crmDao.getSupplier();
  }
  getSupplierWithIdentifier(identifier: string): Promise<IClient[]> {
    return this.crmDao.getSupplierWithIdentifier(identifier);
  }
  //
  // ─── PRODUCT ────────────────────────────────────────────────────────────────────
  //

  addProduct(product: IProduct): Promise<any> {
    return this.productDao.addProduct(product);
  }
  getProducts(): Promise<IProduct[]> {
    return this.productDao.getProducts();
  }
  getProductWithIdentifier(identifier: string): Promise<IProduct[]> {
    return this.productDao.getProductWithIdentifier(identifier);
  }
  updateProduct(product: IProduct): Promise<any> {
    return this.productDao.updateProduct(product);
  }
  removeProduct(identifier: string): Promise<any> {
    return this.productDao.removeProduct(identifier);
  }

  addCategory(category: ICategory): Promise<any> {
    return this.productDao.addCategory(category);
  }
  updateCategory(category: ICategory): Promise<any> {
    return this.productDao.updateCategory(category);
  }
  getCategories(): Promise<ICategory[]> {
    return this.productDao.getCategories();
  }
  getCategoryWithIdentifier(identifier: string): Promise<ICategory[]> {
    return this.productDao.getCategoryWithIdentifier(identifier);
  }
  removeCategory(identifier: string): Promise<any> {
    return this.productDao.removeCategory(identifier);
  }

  addBrand(brand: IBrand): Promise<any> {
    return this.productDao.addBrand(brand);
  }
  getBrands(): Promise<IBrand[]> {
    return this.productDao.getBrands();
  }
  getBrandWithIdentifier(identifier: string): Promise<IBrand[]> {
    return this.productDao.getBrandWithIdentifier(identifier);
  }
  updateBrand(brand: IBrand): Promise<any> {
    return this.productDao.updateBrand(brand);
  }
  removeBrand(identifier: string): Promise<any> {
    return this.productDao.removeBrand(identifier);
  }
  addPurchase(purchase: IPurchase): Promise<any> {
    return this.productDao.addPurchase(purchase);
  }
  //
  // ─── FILE ───────────────────────────────────────────────────────────────────────
  //

  saveFile(file: IFile): Promise<any> {
    return this.fileDao.saveFilePath(file);
  }

  //
  // ─── BRANCH ─────────────────────────────────────────────────────────────────────
  //

  addNewBranch(branch: IBranch): Promise<any> {
    return this.companyDao.addBranch(branch);
  }
  updateBranch(branch: IBranch): Promise<any> {
    return this.companyDao.updateBranch(branch);
  }
  removeBranch(identifier: string): Promise<any> {
    return this.companyDao.removeBranch(identifier);
  }
  getBranchWithIdentifier(identifier: string): Promise<IBranch[]> {
    return this.companyDao.getBranchWithIdentifier(identifier);
  }
  getBranchs(): Promise<IBranch[]> {
    return this.companyDao.getBranchs();
  }

  //
  // ─── COMPANY ────────────────────────────────────────────────────────────────────
  //

  addNewCompany(company: ICompany): Promise<any> {
    return this.companyDao.addCompany(company);
  }

  updateCompany(company: ICompany): Promise<any> {
    return this.companyDao.updateCompany(company);
  }
  removeCompany(identifier: string): Promise<any> {
    return this.companyDao.removeCompany(identifier);
  }
  getCompany(): Promise<ICompany[]> {
    return this.companyDao.getCompany();
  }
  getCompanyWithIdentifier(identifier: string): Promise<ICompany[]> {
    return this.companyDao.getCompanyWithIdentifier(identifier);
  }

  //
  // ─── RANK ───────────────────────────────────────────────────────────────────────
  //

  addRank(rank: IRank): Promise<any> {
    return this.rankDao.addRank(rank);
  }
  removeRank(identifier: string): Promise<any> {
    return this.rankDao.removeRank(identifier);
  }

  updateRank(rank: IRank): Promise<any> {
    return this.rankDao.updateRank(rank);
  }
  getRanks(): Promise<IRank[]> {
    return this.rankDao.getRanks();
  }
  getRankWithIdentifier(identifier: string): Promise<IRank[]> {
    return this.rankDao.getRankWithIdentifier(identifier);
  }

  //
  // ─── EMPLOYEE ───────────────────────────────────────────────────────────────────
  //

  addEmployeeOtherInfo(employeeDetail: IEmployeeOther): Promise<any> {
    return this.employeeDao.addEmployeeDetailInfo(employeeDetail);
  }
  setActiveEmployee(empId: string, status: number): Promise<any> {
    return this.employeeDao.setActiveEmployee(empId, status);
  }
  addNewEmployee(employee: IEmployee): Promise<string> {
    return this.employeeDao.addEmployee(employee);
  }

  getEmployees(): Promise<IEmployee[]> {
    return this.employeeDao.getEmployees();
  }
  getEmployeeWithIdentifier(identifier: string): Promise<IEmployee[]> {
    return this.employeeDao.getEmployeeWithIdentifier(identifier);
  }

  getEmployeeInfo(identifier?: string): Promise<IEmployeeInfo[]> {
    return this.employeeDao.getEmployeeInfo(identifier);
  }
  updateEmployee(employee: IEmployeeInfo): Promise<any> {
    return this.employeeDao.updateEmployee(employee);
  }
  //
  // ─── USERS ──────────────────────────────────────────────────────────────────────
  //

  addNewUser(user: IUser): Promise<any> {
    return this.userDao.addUser(user);
  }
  getUserWithCredentials(username: string, password: string): Promise<IUser> {
    return this.userDao.getUserWithCredentials(username, password);
  }

  setUserAccess(access: IAccess): Promise<any> {
    return this.userDao.addUserAccess(access);
  }

  getUserWithIdentifier(identifier: string): Promise<IUser[]> {
    return this.userDao.getUserWithidentifier(identifier);
  }
  getUsers(): Promise<IUser[]> {
    return this.userDao.getUsers();
  }
}

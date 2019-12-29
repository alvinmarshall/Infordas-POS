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

//
// ─── DEPENDENCY INJECTION OF MODULES ────────────────────────────────────────────
//

import { Container } from "inversify";
import { GetAuthenticationTask } from "../../core/domain/useCase/user/GetAuthenticationTask";
import { UserRepositoryImpl } from "../../core/data/repository/user/UserRepositoryImpl";
import { RemoteDataSourceImpl } from "../../core/data/source/remote-source/RemoteDataSourceImpl";
import { UserService } from "../api/user/user.service";
import { UserController } from "../api/user/user.controller";
import { AddEmployeeTask } from "../../core/domain/useCase/employee/AddEmployeeTask";
import { EmployeeRepositoryImpl } from "../../core/data/repository/employee/EmployeeRepositoryImpl";
import { EmployeeService } from "../api/employee/employee.service";
import { EmployeeController } from "../api/employee/employee.controller";
import { AddAUserTask } from "../../core/domain/useCase/user/AddAUserTask";
import { SetEmployeeActiveTask } from "../../core/domain/useCase/employee/SetEmployeeActiveTask";
import { RankRepositoryImpl } from "../../core/data/repository/rank/RankRepositoryImpl";
import { AddRankTask } from "../../core/domain/useCase/rank/AddRankTask";
import { RankController } from "../api/rank/rank.controller";
import { RankService } from "../api/rank/rank.service";
import { RemoveRankTask } from "../../core/domain/useCase/rank/RemoveRankTask";
import { UpdateRankTask } from "../../core/domain/useCase/rank/UpdateRankTask";
import { AddCompanyTask } from "../../core/domain/useCase/company/AddCompanyTask";
import { CompanyRepositoryImpl } from "../../core/data/repository/company/CompanyRepositoryImpl";
import { CompanyService } from "../api/company/company.service";
import { CompanyController } from "../api/company/company.controller";
import { UpdateCompanyTask } from "../../core/domain/useCase/company/UpdateCompanyTask";
import { RemoveCompanyTask } from "../../core/domain/useCase/company/RemoveCompanyTask";
import { AddBranchTask } from "../../core/domain/useCase/branch/AddBranchTask";
import { UpdateBranchTask } from "../../core/domain/useCase/branch/UpdateBranchTask";
import { RemoveBranchTask } from "../../core/domain/useCase/branch/RemoveBranchTask";
import { AddEmployeeDetailTask } from "../../core/domain/useCase/employee/AddEmployeeDetailTask";
import { AccessTask } from "../../core/domain/useCase/access/AccessTask";
import PassportService from "../api/auth/passport-config";
import { JWTTokenService } from "../api/auth/JWTTokenService";
import { GetCompanyTask } from "../../core/domain/useCase/company/GetCompanyTask";
import { GetBranchTask } from "../../core/domain/useCase/branch/GetBranchTask";
import { GetEmployeeTask } from "../../core/domain/useCase/employee/GetEmployeeTask";
import { GetRankTask } from "../../core/domain/useCase/rank/GetRankTask";
import { GetUsersTask } from "../../core/domain/useCase/user/GetUsersTask";
import { FileUtils } from "../api/files/FileUtils";
import { FileService } from "../api/files/file.service";
import { FileController } from "../api/files/file.controller";
import { SaveFileTask } from "../../core/domain/useCase/files/SaveFileTask";
import { FileRepositoryImpl } from "../../core/data/repository/files/FileRepositoryImpl";
import { GetEmployeeInfoTask } from "../../core/domain/useCase/employee/GetEmployeeInfoTask";
import { UpdateEmployeeTask } from "../../core/domain/useCase/employee/UpdateEmployeeTask";
import { AddProductTask } from "../../core/domain/useCase/product/AddProductTask";
import { ProductRepositoryImpl } from "../../core/data/repository/product/ProductRepositoryImpl";
import { ProductService } from "../api/product/product.service";
import { ProductController } from "../api/product/product.controller";
import { GetProductTask } from "../../core/domain/useCase/product/GetProductTask";
import { UpdateProductTask } from "../../core/domain/useCase/product/UpdateProductTask";
import { RemoveProductTask } from "../../core/domain/useCase/product/RemoveProductTask";
import { AddCategoryTask } from "../../core/domain/useCase/product/AddCategoryTask";
import { UpdateCategoryTask } from "../../core/domain/useCase/product/UpdateCategoryTask";
import { GetCategoryTask } from "../../core/domain/useCase/product/GetCategoryTask";
import { RemoveCategoryTask } from "../../core/domain/useCase/product/RemoveCategoryTask";
import { AddBrandTask } from "../../core/domain/useCase/product/AddBrandTask";
import { GetBrandTask } from "../../core/domain/useCase/product/GetBrandTask";
import { UpdateBrandTask } from "../../core/domain/useCase/product/UpdateBrandTask";
import { RemoveBrandTask } from "../../core/domain/useCase/product/RemoveBrandTask";
import { AddPurchaseTask } from "../../core/domain/useCase/product/AddPurchaseTask";
import { CrmRepositoryImpl } from "../../core/data/repository/crm/CrmRepositoryImpl";
import { AddClientTask } from "../../core/domain/useCase/crm/AddClientTask";
import { CrmService } from "../api/crm/crm.service";
import { CrmController } from "../api/crm/crm.controller";
import { GetClientTask } from "../../core/domain/useCase/crm/GetClientTask";
import { BranchService } from "../api/company/branch.service";
import { BrandService } from "../api/product/brand.service";
import { CategoryService } from "../api/product/category.service";
import { PurchaseService } from "../api/product/purchase.service";
import config from "config";
import { SqliteDatabase } from "../../core/data/source/local-source/SqliteDatabase";
import { DatabaseContext } from "../../core/data/source/remote-source/DatabaseContext";
import { CrmDaoImpl } from "../../core/data/source/db/dao/crm/CrmDaoImpl";
import { ProductDaoImpl } from "../../core/data/source/db/dao/product/ProductDaoImpl";
import { FileDaoImpl } from "../../core/data/source/db/dao/files/FileDaoImpl";
import { CompanyDaoImpl } from "../../core/data/source/db/dao/company/CompanyDaoImpl";
import { RankDaoImpl } from "../../core/data/source/db/dao/rank/RankDaoImpl";
import { EmployeeDaoImpl } from "../../core/data/source/db/dao/employee/EmployeeDaoImpl";
import { UserDaoImpl } from "../../core/data/source/db/dao/user/UserDaoImpl";
let DIContainer = new Container();

//
// ─── UTILS ──────────────────────────────────────────────────────────────────────
//

DIContainer.bind<JWTTokenService>(JWTTokenService).toSelf();
DIContainer.bind<FileUtils>(FileUtils).toSelf();

//
// ─── API ────────────────────────────────────────────────────────────────────────
//
DIContainer.bind<CrmController>(CrmController).toSelf();
DIContainer.bind<CrmService>(CrmService).toSelf();
DIContainer.bind<ProductController>(ProductController).toSelf();
DIContainer.bind<PurchaseService>(PurchaseService).toSelf();
DIContainer.bind<CategoryService>(CategoryService).toSelf();
DIContainer.bind<BrandService>(BrandService).toSelf();
DIContainer.bind<ProductService>(ProductService).toSelf();
DIContainer.bind<FileController>(FileController).toSelf();
DIContainer.bind<FileService>(FileService).toSelf();
DIContainer.bind<PassportService>(PassportService).toSelf();
DIContainer.bind<CompanyController>(CompanyController).toSelf();
DIContainer.bind<BranchService>(BranchService).toSelf();
DIContainer.bind<CompanyService>(CompanyService).toSelf();
DIContainer.bind<RankController>(RankController).toSelf();
DIContainer.bind<RankService>(RankService).toSelf();
DIContainer.bind<EmployeeController>(EmployeeController).toSelf();
DIContainer.bind<EmployeeService>(EmployeeService).toSelf();
DIContainer.bind<UserService>(UserService).toSelf();
DIContainer.bind<UserController>(UserController).toSelf();
//
// ─── DOMAIN ─────────────────────────────────────────────────────────────────────
//
DIContainer.bind<GetClientTask>(GetClientTask).toSelf();
DIContainer.bind<AddClientTask>(AddClientTask).toSelf();
DIContainer.bind<AddPurchaseTask>(AddPurchaseTask).toSelf();
DIContainer.bind<RemoveBrandTask>(RemoveBrandTask).toSelf();
DIContainer.bind<UpdateBrandTask>(UpdateBrandTask).toSelf();
DIContainer.bind<GetBrandTask>(GetBrandTask).toSelf();
DIContainer.bind<AddBrandTask>(AddBrandTask).toSelf();
DIContainer.bind<RemoveCategoryTask>(RemoveCategoryTask).toSelf();
DIContainer.bind<GetCategoryTask>(GetCategoryTask).toSelf();
DIContainer.bind<UpdateCategoryTask>(UpdateCategoryTask).toSelf();
DIContainer.bind<AddCategoryTask>(AddCategoryTask).toSelf();
DIContainer.bind<RemoveProductTask>(RemoveProductTask).toSelf();
DIContainer.bind<UpdateProductTask>(UpdateProductTask).toSelf();
DIContainer.bind<GetProductTask>(GetProductTask).toSelf();
DIContainer.bind<AddProductTask>(AddProductTask).toSelf();
DIContainer.bind<UpdateEmployeeTask>(UpdateEmployeeTask).toSelf();
DIContainer.bind<GetEmployeeInfoTask>(GetEmployeeInfoTask).toSelf();
DIContainer.bind<SaveFileTask>(SaveFileTask).toSelf();
DIContainer.bind<GetUsersTask>(GetUsersTask).toSelf();
DIContainer.bind<GetRankTask>(GetRankTask).toSelf();
DIContainer.bind<GetEmployeeTask>(GetEmployeeTask).toSelf();
DIContainer.bind<GetBranchTask>(GetBranchTask).toSelf();
DIContainer.bind<GetCompanyTask>(GetCompanyTask).toSelf();
DIContainer.bind<AccessTask>(AccessTask).toSelf();
DIContainer.bind<AddEmployeeDetailTask>(AddEmployeeDetailTask).toSelf();
DIContainer.bind<RemoveBranchTask>(RemoveBranchTask).toSelf();
DIContainer.bind<UpdateBranchTask>(UpdateBranchTask).toSelf();
DIContainer.bind<AddBranchTask>(AddBranchTask).toSelf();
DIContainer.bind<RemoveCompanyTask>(RemoveCompanyTask).toSelf();
DIContainer.bind<UpdateCompanyTask>(UpdateCompanyTask).toSelf();
DIContainer.bind<AddCompanyTask>(AddCompanyTask).toSelf();
DIContainer.bind<UpdateRankTask>(UpdateRankTask).toSelf();
DIContainer.bind<RemoveRankTask>(RemoveRankTask).toSelf();
DIContainer.bind<AddRankTask>(AddRankTask).toSelf();
DIContainer.bind<SetEmployeeActiveTask>(SetEmployeeActiveTask).toSelf();
DIContainer.bind<AddAUserTask>(AddAUserTask).toSelf();
DIContainer.bind<GetAuthenticationTask>(GetAuthenticationTask).toSelf();
DIContainer.bind<AddEmployeeTask>(AddEmployeeTask).toSelf();
//
// ─── DATA ───────────────────────────────────────────────────────────────────────
//
DIContainer.bind<CrmRepositoryImpl>(CrmRepositoryImpl).toSelf();
DIContainer.bind<ProductRepositoryImpl>(ProductRepositoryImpl).toSelf();
DIContainer.bind<FileRepositoryImpl>(FileRepositoryImpl).toSelf();
DIContainer.bind<CompanyRepositoryImpl>(CompanyRepositoryImpl).toSelf();
DIContainer.bind<RankRepositoryImpl>(RankRepositoryImpl).toSelf();
DIContainer.bind<EmployeeRepositoryImpl>(EmployeeRepositoryImpl).toSelf();
DIContainer.bind<UserRepositoryImpl>(UserRepositoryImpl).toSelf();
DIContainer.bind<RemoteDataSourceImpl>(RemoteDataSourceImpl).toSelf();
//
// ─── REMOTE ─────────────────────────────────────────────────────────────────────
//
DIContainer.bind<CrmDaoImpl>(CrmDaoImpl).toSelf();
DIContainer.bind<ProductDaoImpl>(ProductDaoImpl).toSelf();
DIContainer.bind<FileDaoImpl>(FileDaoImpl).toSelf();
DIContainer.bind<CompanyDaoImpl>(CompanyDaoImpl).toSelf();
DIContainer.bind<RankDaoImpl>(RankDaoImpl).toSelf();
DIContainer.bind<EmployeeDaoImpl>(EmployeeDaoImpl).toSelf();
DIContainer.bind<UserDaoImpl>(UserDaoImpl).toSelf();
if (process.env.NODE_ENV === "test") {
  DIContainer.bind<DatabaseContext>(DatabaseContext).toConstantValue(
    new SqliteDatabase(config.get("sqliteFile"))
  );
} else {
  DIContainer.bind<DatabaseContext>(DatabaseContext).toConstantValue(
    new DatabaseContext(config.get("mysqlConfig"))
  );
}

export default DIContainer;

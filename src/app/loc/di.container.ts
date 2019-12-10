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
import { RemoteDataSourceImpl } from "../../core/remote-source/source/RemoteDataSourceImpl";
import { UserDaoImpl } from "../../core/remote-source/db/dao/user/UserDaoImpl";
import { MysqlDatabase } from "../../core/remote-source/db/MysqlDatabase";
import { UserService } from "../api/user/user.service";
import { UserController } from "../api/user/user.controller";
import { AddEmployeeTask } from "../../core/domain/useCase/employee/AddEmployeeTask";
import { EmployeeDaoImpl } from "../../core/remote-source/db/dao/employee/EmployeeDaoImpl";
import { EmployeeRepositoryImpl } from "../../core/data/repository/employee/EmployeeRepositoryImpl";
import { EmployeeService } from "../api/employee/employee.service";
import { EmployeeController } from "../api/employee/employee.controller";
import { AddAUserTask } from "../../core/domain/useCase/user/AddAUserTask";
import { SetEmployeeActiveTask } from "../../core/domain/useCase/employee/SetEmployeeActiveTask";
import { RankDaoImpl } from "../../core/remote-source/db/dao/rank/RankDaoImpl";
import { RankRepositoryImpl } from "../../core/data/repository/rank/RankRepositoryImpl";
import { AddRankTask } from "../../core/domain/useCase/rank/AddRankTask";
import { RankController } from "../api/rank/rank.controller";
import { RankService } from "../api/rank/rank.service";
import { RemoveRankTask } from "../../core/domain/useCase/rank/RemoveRankTask";
import { UpdateRankTask } from "../../core/domain/useCase/rank/UpdateRankTask";
import { AddCompanyTask } from "../../core/domain/useCase/company/AddCompanyTask";
import { CompanyRepositoryImpl } from "../../core/data/repository/company/CompanyRepositoryImpl";
import { CompanyDaoImpl } from "../../core/remote-source/db/dao/company/CompanyDaoImpl";
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
import { JWTTokenService } from "../api/auth/jwtToken-config";
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
import { FileDaoImpl } from "../../core/remote-source/db/dao/files/FileDaoImpl";
import { GetEmployeeInfoTask } from "../../core/domain/useCase/employee/GetEmployeeInfoTask";
import { UpdateEmployeeTask } from "../../core/domain/useCase/employee/UpdateEmployeeTask";

let DIContainer = new Container();

//
// ─── UTILS ──────────────────────────────────────────────────────────────────────
//

DIContainer.bind<JWTTokenService>(JWTTokenService).toSelf();
DIContainer.bind<FileUtils>(FileUtils).toSelf();

//
// ─── API ────────────────────────────────────────────────────────────────────────
//
DIContainer.bind<FileController>(FileController).toSelf();
DIContainer.bind<FileService>(FileService).toSelf();
DIContainer.bind<PassportService>(PassportService).toSelf();
DIContainer.bind<CompanyController>(CompanyController).toSelf();
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
DIContainer.bind<FileRepositoryImpl>(FileRepositoryImpl).toSelf();
DIContainer.bind<CompanyRepositoryImpl>(CompanyRepositoryImpl).toSelf();
DIContainer.bind<RankRepositoryImpl>(RankRepositoryImpl).toSelf();
DIContainer.bind<EmployeeRepositoryImpl>(EmployeeRepositoryImpl).toSelf();
DIContainer.bind<UserRepositoryImpl>(UserRepositoryImpl).toSelf();
DIContainer.bind<RemoteDataSourceImpl>(RemoteDataSourceImpl).toSelf();
//
// ─── REMOTE ─────────────────────────────────────────────────────────────────────
//
DIContainer.bind<FileDaoImpl>(FileDaoImpl).toSelf();
DIContainer.bind<CompanyDaoImpl>(CompanyDaoImpl).toSelf();
DIContainer.bind<RankDaoImpl>(RankDaoImpl).toSelf();
DIContainer.bind<EmployeeDaoImpl>(EmployeeDaoImpl).toSelf();
DIContainer.bind<UserDaoImpl>(UserDaoImpl).toSelf();
DIContainer.bind<MysqlDatabase>(MysqlDatabase).toSelf();

export default DIContainer;

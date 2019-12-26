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

import { injectable, inject } from "inversify";
import { AddCompanyTask } from "../../../core/domain/useCase/company/AddCompanyTask";
import { ICompany } from "../../../core/domain/entity/company/ICompany";
import { UpdateCompanyTask } from "../../../core/domain/useCase/company/UpdateCompanyTask";
import { RemoveCompanyTask } from "../../../core/domain/useCase/company/RemoveCompanyTask";
import { GetCompanyTask } from "../../../core/domain/useCase/company/GetCompanyTask";
/**
 * CompanyService class
 */
@injectable()
export class CompanyService {
  private addCompanyTask: AddCompanyTask;
  private updateCompanyTask: UpdateCompanyTask;
  private removeCompanyTask: RemoveCompanyTask;
  private getCompanyTask: GetCompanyTask;

  /**
   *@constructor
   * @param $addCompanyTask require AddCompanyTask instance
   * @param $updateCompanyTask require UpdateCompanyTask instance
   * @param $removeCompanyTask require RemoveCompanyTask instance
   * @param $getCompanyTask require GetCompanyTask instance
   */
  constructor(
    @inject(AddCompanyTask) $addCompanyTask: AddCompanyTask,
    @inject(UpdateCompanyTask) $updateCompanyTask: UpdateCompanyTask,
    @inject(RemoveCompanyTask) $removeCompanyTask: RemoveCompanyTask,
    @inject(GetCompanyTask) $getCompanyTask: GetCompanyTask,
  ) {
    this.addCompanyTask = $addCompanyTask;
    this.updateCompanyTask = $updateCompanyTask;
    this.removeCompanyTask = $removeCompanyTask;
    this.getCompanyTask = $getCompanyTask;
  }

 
  //#region company
  //
  // ─── COMPANY ────────────────────────────────────────────────────────────────────
  //

  /**
   * addCompany
   * @param company require type ICompany
   */
  addCompany(company: ICompany): Promise<any> {
    return this.addCompanyTask.buildUseCase(company);
  }

  /**
   * addCompany
   * @param company require type ICompany
   */
  updateCompany(company: ICompany): Promise<any> {
    return this.updateCompanyTask.buildUseCase(company);
  }

  /**
   * addCompany
   * @param identifier require company id
   */
  removeCompany(identifier: string): Promise<any> {
    return this.removeCompanyTask.buildUseCase(identifier);
  }

  getCompanies(): Promise<ICompany[]> {
    return this.getCompanyTask.buildUseCase();
  }

  getCompany(identifier: string): Promise<ICompany[]> {
    return this.getCompanyTask.buildUseCase(identifier);
  }
  //#endregion
}

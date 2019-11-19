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
import { AddBranchTask } from "../../../core/domain/useCase/branch/AddBranchTask";
import { IBranch } from "../../../core/domain/entity/branch/IBranch";
import { UpdateBranchTask } from "../../../core/domain/useCase/branch/UpdateBranchTask";
import { RemoveBranchTask } from "../../../core/domain/useCase/branch/RemoveBranchTask";
/**
 * CompanyService class
 */
@injectable()
export class CompanyService {
  private addCompanyTask: AddCompanyTask;
  private updateCompanyTask: UpdateCompanyTask;
  private removeCompanyTask: RemoveCompanyTask;
  private addBranchTask: AddBranchTask;
  private updateBranchTask: UpdateBranchTask;
  private removeBranchTask: RemoveBranchTask;

  /**
   *
   * @param $addCompanyTask
   * @param $updateCompanyTask
   * @param $removeCompanyTask
   * @param $addBranchTask
   * @param $updateBranchTask
   */
  constructor(
    @inject(AddCompanyTask) $addCompanyTask: AddCompanyTask,
    @inject(UpdateCompanyTask) $updateCompanyTask: UpdateCompanyTask,
    @inject(RemoveCompanyTask) $removeCompanyTask: RemoveCompanyTask,
    @inject(AddBranchTask) $addBranchTask: AddBranchTask,
    @inject(UpdateBranchTask) $updateBranchTask: UpdateBranchTask,
    @inject(RemoveBranchTask) $removeBranchTask: RemoveBranchTask
  ) {
    this.addCompanyTask = $addCompanyTask;
    this.updateCompanyTask = $updateCompanyTask;
    this.removeCompanyTask = $removeCompanyTask;
    this.addBranchTask = $addBranchTask;
    this.updateBranchTask = $updateBranchTask;
    this.removeBranchTask = $removeBranchTask;
  }

  //
  // ─── BRANCH ─────────────────────────────────────────────────────────────────────
  //

  /**
   * addBranch
   * @param branch require type IBranch
   */
  addBranch(branch: IBranch): Promise<any> {
    return this.addBranchTask.buildUseCase(branch);
  }
  /**
   * updateBranch
   * @param branch require type IBranch
   */
  updateBranch(branch: IBranch): Promise<any> {
    return this.updateBranchTask.buildUseCase(branch);
  }

  /**
   * removeBranch
   * @param identifier require branch uuid
   */
  removeBranch(identifier: string): Promise<any> {
    return this.removeBranchTask.buildUseCase(identifier);
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
  //#endregion
}

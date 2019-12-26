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

import { AddBrandTask } from "../../../core/domain/useCase/product/AddBrandTask";

import { GetBrandTask } from "../../../core/domain/useCase/product/GetBrandTask";

import { UpdateBrandTask } from "../../../core/domain/useCase/product/UpdateBrandTask";

import { RemoveBrandTask } from "../../../core/domain/useCase/product/RemoveBrandTask";

import { inject, injectable } from "inversify";
import { IBrand } from "../../../core/domain/entity/product/IBrand";

@injectable()
export class BrandService {
  private addBrandTask: AddBrandTask;
  private getBrandTask: GetBrandTask;
  private updateBrandTask: UpdateBrandTask;
  private removeBrandTask: RemoveBrandTask;

  /**
   *@constructor
   * @param $addBrandTask requires AddBrandTask instance
   * @param $getBrandTask requires GetBrandTask instance
   * @param $updateBrandTask requires UpdateBrandTask instance
   * @param $removeBrandTask requires RemoveBrandTask instance
   */
  constructor(
    @inject(AddBrandTask) $addBrandTask: AddBrandTask,
    @inject(GetBrandTask) $getBrandTask: GetBrandTask,
    @inject(UpdateBrandTask) $updateBrandTask: UpdateBrandTask,
    @inject(RemoveBrandTask) $removeBrandTask: RemoveBrandTask
  ) {
    this.addBrandTask = $addBrandTask;
    this.getBrandTask = $getBrandTask;
    this.updateBrandTask = $updateBrandTask;
    this.removeBrandTask = $removeBrandTask;
  }

  //
  // ─── BRAMD ──────────────────────────────────────────────────────────────────────
  //
  addBrand(brand: IBrand): Promise<any> {
    return this.addBrandTask.buildUseCase(brand);
  }
  getBrands(): Promise<IBrand[]> {
    return this.getBrandTask.buildUseCase();
  }
  getBrandWithIdenfier(identifier: string): Promise<IBrand[]> {
    return this.getBrandTask.buildUseCase(identifier);
  }
  updateBrand(cateory: IBrand): Promise<any> {
    return this.updateBrandTask.buildUseCase(cateory);
  }
  removeBrand(identifier: string): Promise<any> {
    return this.removeBrandTask.buildUseCase(identifier);
  }
}

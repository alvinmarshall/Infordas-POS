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

import { AddCategoryTask } from "../../../core/domain/useCase/product/AddCategoryTask";

import { UpdateCategoryTask } from "../../../core/domain/useCase/product/UpdateCategoryTask";

import { GetCategoryTask } from "../../../core/domain/useCase/product/GetCategoryTask";

import { RemoveCategoryTask } from "../../../core/domain/useCase/product/RemoveCategoryTask";

import { inject, injectable } from "inversify";
import { ICategory } from "../../../core/domain/entity/product/ICategory";

@injectable()
export class CategoryService {
  private addCategoryTask: AddCategoryTask;
  private updateCategoryTask: UpdateCategoryTask;
  private getCategoryTask: GetCategoryTask;
  private removeCategoryTask: RemoveCategoryTask;

  /**
   * @param $addCategoryTask requires AddCategoryTask instance
   * @param $updateCategoryTask requires updateCategoryTask instance
   * @param $getCategoryTask requires GetCategoryTask instance
   * @param $removeCategoryTask requires RemoveCategoryTask instance
   */
  constructor(
    @inject(AddCategoryTask) $addCategoryTask: AddCategoryTask,
    @inject(UpdateCategoryTask) $updateCategoryTask: UpdateCategoryTask,
    @inject(GetCategoryTask) $getCategoryTask: GetCategoryTask,
    @inject(RemoveCategoryTask) $removeCategoryTask: RemoveCategoryTask
  ) {
    this.addCategoryTask = $addCategoryTask;
    this.updateCategoryTask = $updateCategoryTask;
    this.getCategoryTask = $getCategoryTask;
    this.removeCategoryTask = $removeCategoryTask;
  }

  //
  // ─── CATEORY ────────────────────────────────────────────────────────────────────
  //

  addCategory(cateory: ICategory): Promise<any> {
    return this.addCategoryTask.buildUseCase(cateory);
  }
  updateCategory(cateory: ICategory): Promise<any> {
    return this.updateCategoryTask.buildUseCase(cateory);
  }
  getCategories(): Promise<ICategory[]> {
    return this.getCategoryTask.buildUseCase();
  }
  getCategoryWithIdenfier(identifier: string): Promise<ICategory[]> {
    return this.getCategoryTask.buildUseCase(identifier);
  }
  removeCategory(identifier: string): Promise<any> {
    return this.removeCategoryTask.buildUseCase(identifier);
  }
}

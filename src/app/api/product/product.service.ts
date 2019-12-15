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

import { AddProductTask } from "../../../core/domain/useCase/product/AddProductTask";
import { IProduct } from "../../../core/domain/entity/product/IProduct";
import { injectable, inject } from "inversify";
import { GetProductTask } from "../../../core/domain/useCase/product/GetProductTask";
import { UpdateProductTask } from "../../../core/domain/useCase/product/UpdateProductTask";
import { RemoveProductTask } from "../../../core/domain/useCase/product/RemoveProductTask";
import { AddCategoryTask } from "../../../core/domain/useCase/product/AddCategoryTask";
import { ICategory } from "../../../core/domain/entity/product/ICategory";
import { UpdateCategoryTask } from "../../../core/domain/useCase/product/UpdateCategoryTask";
import { GetCategoryTask } from "../../../core/domain/useCase/product/GetCategoryTask";
import { RemoveCategoryTask } from "../../../core/domain/useCase/product/RemoveCategoryTask";

/**
 * ProductService
 */
@injectable()
export class ProductService {
  private addProductTask: AddProductTask;
  private getProductTask: GetProductTask;
  private updateProductTask: UpdateProductTask;
  private removeProductTask: RemoveProductTask;
  private addCategoryTask: AddCategoryTask;
  private updateCategoryTask: UpdateCategoryTask;
  private getCategoryTask: GetCategoryTask;
  private removeCategoryTask: RemoveCategoryTask;

  /**
   * @constructor
   * @param $addProductTask requires AddProductTask instance
   * @param $getProductTask requires GetProductTask instance
   * @param $updateProductTask requires UpdateProductTask instance
   * @param $removeProductTask requires RemoveProductTask instance
   */
  constructor(
    @inject(AddProductTask) $addProductTask: AddProductTask,
    @inject(GetProductTask) $getProductTask: GetProductTask,
    @inject(UpdateProductTask) $updateProductTask: UpdateProductTask,
    @inject(RemoveProductTask) $removeProductTask: RemoveProductTask,
    @inject(AddCategoryTask) $addCategoryTask: AddCategoryTask,
    @inject(UpdateCategoryTask) $updateCategoryTask: UpdateCategoryTask,
    @inject(GetCategoryTask) $getCategoryTask: GetCategoryTask,
    @inject(RemoveCategoryTask) $removeCategoryTask: RemoveCategoryTask
  ) {
    this.addProductTask = $addProductTask;
    this.getProductTask = $getProductTask;
    this.updateProductTask = $updateProductTask;
    this.removeProductTask = $removeProductTask;
    this.addCategoryTask = $addCategoryTask;
    this.updateCategoryTask = $updateCategoryTask;
    this.getCategoryTask = $getCategoryTask;
    this.removeCategoryTask = $removeCategoryTask;
  }

  //
  // ─── PRODUCT ────────────────────────────────────────────────────────────────────
  //

  addProduct(product: IProduct): Promise<any> {
    return this.addProductTask.buildUseCase(product);
  }

  getProducts(): Promise<IProduct[]> {
    return this.getProductTask.buildUseCase();
  }

  getProductWithIdentifier(identifier: string): Promise<IProduct[]> {
    return this.getProductTask.buildUseCase(identifier);
  }

  updateProduct(product: IProduct): Promise<any> {
    return this.updateProductTask.buildUseCase(product);
  }

  removeProduct(identifier: string): Promise<any> {
    return this.removeProductTask.buildUseCase(identifier);
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

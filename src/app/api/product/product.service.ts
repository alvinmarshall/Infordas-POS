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
import { AddBrandTask } from "../../../core/domain/useCase/product/AddBrandTask";
import { IBrand } from "../../../core/domain/entity/product/IBrand";
import { GetBrandTask } from "../../../core/domain/useCase/product/GetBrandTask";
import { UpdateBrandTask } from "../../../core/domain/useCase/product/UpdateBrandTask";
import { RemoveBrandTask } from "../../../core/domain/useCase/product/RemoveBrandTask";

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
  private addBrandTask: AddBrandTask;
  private getBrandTask: GetBrandTask;
  private updateBrandTask:UpdateBrandTask;
  private removeBrandTask:RemoveBrandTask;

  /**
   * @constructor
   * @param $addProductTask requires AddProductTask instance
   * @param $getProductTask requires GetProductTask instance
   * @param $updateProductTask requires UpdateProductTask instance
   * @param $removeProductTask requires RemoveProductTask instance
   * @param $addCategoryTask requires AddCategoryTask instance
   * @param $updateCategoryTask requires updateCategoryTask instance
   * @param $getCategoryTask requires GetCategoryTask instance
   * @param $removeCategoryTask requires RemoveCategoryTask instance
   * @param $addBrandTask requires AddBrandTask instance
   * @param $getBrandTask requires GetBrandTask instance
   * @param $updateBrandTask requires UpdateBrandTask instance
   * @param $removeBrandTask requires RemoveBrandTask instance
   */
  constructor(
    @inject(AddProductTask) $addProductTask: AddProductTask,
    @inject(GetProductTask) $getProductTask: GetProductTask,
    @inject(UpdateProductTask) $updateProductTask: UpdateProductTask,
    @inject(RemoveProductTask) $removeProductTask: RemoveProductTask,
    @inject(AddCategoryTask) $addCategoryTask: AddCategoryTask,
    @inject(UpdateCategoryTask) $updateCategoryTask: UpdateCategoryTask,
    @inject(GetCategoryTask) $getCategoryTask: GetCategoryTask,
    @inject(RemoveCategoryTask) $removeCategoryTask: RemoveCategoryTask,
    @inject(AddBrandTask) $addBrandTask: AddBrandTask,
    @inject(GetBrandTask) $getBrandTask: GetBrandTask,
    @inject(UpdateBrandTask) $updateBrandTask:UpdateBrandTask,
    @inject(RemoveBrandTask) $removeBrandTask:RemoveBrandTask

  ) {
    this.addProductTask = $addProductTask;
    this.getProductTask = $getProductTask;
    this.updateProductTask = $updateProductTask;
    this.removeProductTask = $removeProductTask;
    this.addCategoryTask = $addCategoryTask;
    this.updateCategoryTask = $updateCategoryTask;
    this.getCategoryTask = $getCategoryTask;
    this.removeCategoryTask = $removeCategoryTask;
    this.addBrandTask = $addBrandTask;
    this.getBrandTask = $getBrandTask;
    this.updateBrandTask = $updateBrandTask;
    this.removeBrandTask = $removeBrandTask;
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

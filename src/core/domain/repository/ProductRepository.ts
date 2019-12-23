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

import { IProduct } from "../entity/product/IProduct";
import { ICategory } from "../entity/product/ICategory";
import { IBrand } from "../entity/product/IBrand";
import { IPurchase } from "../entity/product/IPurchase";

export interface ProductRepository {
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
}

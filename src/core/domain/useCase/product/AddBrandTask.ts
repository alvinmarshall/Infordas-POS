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

import { BaseUseCase } from "../base/BaseUseCase";
import { IBrand } from "../../entity/product/IBrand";
import { ProductRepositoryImpl } from "../../../data/repository/product/ProductRepositoryImpl";
import { ProductRepository } from "../../repository/ProductRepository";
import { injectable, inject } from "inversify";

/**
 * AddBrandTask
 * super class {@Link ../base/BaseUseCase}
 */
@injectable()
export class AddBrandTask extends BaseUseCase<any, IBrand> {
  private productRepository: ProductRepository;
 
  /**
   * @constructor
   * @param $productRepository requires ProductRepository instance
   */
  constructor(@inject(ProductRepositoryImpl) $productRepository: ProductRepository) {
    super();
    this.productRepository = $productRepository;
  }
  protected generateUseCase(input?: IBrand | undefined): Promise<any> {
    if (input == null) throw new Error("brand params can't be null");
    return this.productRepository.addBrand(input);
  }
}

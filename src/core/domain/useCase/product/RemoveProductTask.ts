
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
import { ProductRepository } from "../../repository/ProductRepository";
import { injectable, inject } from "inversify";
import { ProductRepositoryImpl } from "../../../data/repository/product/ProductRepositoryImpl";
/**
 * RemoveProductTask
 * super class BaseUseCase {@Link ../base/BaseUseCase}
 */
@injectable()
export class RemoveProductTask extends BaseUseCase<any, string> {
  private productRepository: ProductRepository;

  /**
   * @constructor
   * @param $productRepository requires ProductRepository instance
   */
  constructor(@inject(ProductRepositoryImpl) $productRepository: ProductRepository) {
    super();
    this.productRepository = $productRepository;
  }

  protected generateUseCase(input?: string | undefined): Promise<any> {
    if (input == null) throw new Error("product identifier not specified");
    return this.productRepository.removeProduct(input);
  }
}

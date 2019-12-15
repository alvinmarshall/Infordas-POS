import { BaseUseCase } from "../base/BaseUseCase";
import { ICategory } from "../../entity/product/ICategory";
import { ProductRepository } from "../../repository/ProductRepository";
import { injectable, inject } from "inversify";
import { ProductRepositoryImpl } from "../../../data/repository/product/ProductRepositoryImpl";

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

@injectable()
export class AddCategoryTask extends BaseUseCase<any, ICategory> {
  private productRepository: ProductRepository;

  constructor(
    @inject(ProductRepositoryImpl) $productRepository: ProductRepository
  ) {
    super();
    this.productRepository = $productRepository;
  }
  protected generateUseCase(input?: ICategory | undefined): Promise<any> {
    if (input == null) throw new Error("category params can't be null");
    return this.productRepository.addCategory(input);
  }
}

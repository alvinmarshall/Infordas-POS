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

import { ProductRepository } from "../../../src/core/domain/repository/ProductRepository";
import { mock, instance, when } from "ts-mockito";
import { TestProductGenerator } from "../../utils/TestProductGenerator";
import { assert } from "chai";
import { AddBrandTask } from "../../../src/core/domain/useCase/product/AddBrandTask";

describe("domain.useCase.product AddBrandTask test", () => {
  let productRepository: ProductRepository;
  let productRepositoryInstance: ProductRepository;
  let addBrandTask: AddBrandTask;
  beforeEach(() => {
    productRepository = mock<ProductRepository>();
    productRepositoryInstance = instance(productRepository);
    addBrandTask = new AddBrandTask(productRepositoryInstance);
  });

  it("Add brand with params success", async () => {
    const brand = TestProductGenerator.brand();
    const actual = "1 item inserted";
    when(productRepository.addBrand(brand)).thenResolve(actual);
    const expected = await addBrandTask.buildUseCase(brand);
    assert.equal(expected, actual);
  });

  it("Add brand with no params throws exception", () => {
    const errorMsg = "brand params can't be null";
    assert.throw(
      () => {
        addBrandTask.buildUseCase();
      },
      Error,
      errorMsg
    );
    
  });
});

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
import { assert, expect } from "chai";
import { AddProductTask } from "../../../src/core/domain/useCase/product/AddProductTask";

describe("domain.useCase.product AddProductTask test", () => {
  let productRepository: ProductRepository;
  let productRepositoryInstance: ProductRepository;
  let addProductTask: AddProductTask;

  beforeEach(() => {
    productRepository = mock<ProductRepository>();
    productRepositoryInstance = instance(productRepository);
    addProductTask = new AddProductTask(productRepositoryInstance);
  });

  it("Add product with params success", async () => {
    const product = TestProductGenerator.product();
    const actual = "1 item inserted";
    when(productRepository.addProduct(product)).thenResolve(actual);
    const expected = await addProductTask.buildUseCase(product);
    assert.equal(expected, actual);
  });

  it("Add product with params success", () => {
    const errorMsg = "product can't be null";
    assert.throw(
      () => {
        addProductTask.buildUseCase();
      },
      Error,
      errorMsg
    );
  });
});


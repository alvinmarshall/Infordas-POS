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
import { mock, instance, when, verify } from "ts-mockito";
import { GetProductTask } from "../../../src/core/domain/useCase/product/GetProductTask";
import { TestProductGenerator } from "../../utils/TestProductGenerator";
import { assert } from "chai";

describe("domain.useCase.product GetProductTask test", () => {
  let productRepository: ProductRepository;
  let productRepositoryInstance: ProductRepository;
  let getProductTask: GetProductTask;

  beforeEach(() => {
    productRepository = mock<ProductRepository>();
    productRepositoryInstance = instance(productRepository);
    getProductTask = new GetProductTask(productRepositoryInstance);
  });

  it("Get all product with no params success", async () => {
    const actual = TestProductGenerator.getProductList();
    when(productRepository.getProducts()).thenResolve(actual);
    const expected = await getProductTask.buildUseCase();
    assert.equal(expected, actual);
    verify(productRepository.getProducts()).called();
    verify(productRepository.getProductWithIdentifier("")).never();
  });

  it("Get product with params success", async () => {
    const identifier = TestProductGenerator.product().uuid;
    const actual = TestProductGenerator.getProduct();
    when(productRepository.getProductWithIdentifier(identifier)).thenResolve(
      actual
    );
    const expected = await getProductTask.buildUseCase(identifier);
    assert.equal(expected, actual);
    verify(productRepository.getProductWithIdentifier(identifier)).called();
    verify(productRepository.getProducts()).never();
  });
});

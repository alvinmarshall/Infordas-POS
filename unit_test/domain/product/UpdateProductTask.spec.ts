import { ProductRepository } from "../../../src/core/domain/repository/ProductRepository";
import { UpdateProductTask } from "../../../src/core/domain/useCase/product/UpdateProductTask";
import { mock, instance, when } from "ts-mockito";
import { TestProductGenerator } from "../../utils/TestProductGenerator";
import { assert } from "chai";

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

describe("domain.useCase.product UpdateProductTask test", () => {
  let productRepository: ProductRepository;
  let productRepositoryInstance: ProductRepository;
  let updateProductTask: UpdateProductTask;

  beforeEach(() => {
    productRepository = mock<ProductRepository>();
    productRepositoryInstance = instance(productRepository);
    updateProductTask = new UpdateProductTask(productRepositoryInstance);
  });

  it("Update product with params success", async () => {
    const product = TestProductGenerator.product();
    const actual = "1 item modified";
    when(productRepository.updateProduct(product)).thenResolve(actual);
    const expected = await updateProductTask.buildUseCase(product);
    assert.equal(expected, actual);
  });

  it("Add product with params success", () => {
    const errorMsg = "product params can't be null";
    assert.throw(
      () => {
        updateProductTask.buildUseCase();
      },
      Error,
      errorMsg
    );
  });
});

import { ProductRepository } from "../../../src/core/domain/repository/ProductRepository";
import { RemoveProductTask } from "../../../src/core/domain/useCase/product/RemoveProductTask";
import { mock, instance, when, verify } from "ts-mockito";
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

describe("domain.useCase.product RemoveProductTask test", () => {
  let productRepository: ProductRepository;
  let productRepositoryInstance: ProductRepository;
  let removeProductTask: RemoveProductTask;
  beforeEach(() => {
    productRepository = mock<ProductRepository>();
    productRepositoryInstance = instance(productRepository);
    removeProductTask = new RemoveProductTask(productRepositoryInstance);
  });

  it("Remove Product with params success", async () => {
    const identifier = TestProductGenerator.product().uuid;
    const actual = "1 item deleted";
    when(productRepository.removeProduct(identifier)).thenResolve(actual);
    const expected = await removeProductTask.buildUseCase(identifier);
    assert.equal(expected, actual);
    verify(productRepository.removeProduct(identifier)).called();
  });

  it("Remove Product with no params throws exception", () => {
    const errorMsg = "product identifier not specified";
    assert.throw(
      () => {
        removeProductTask.buildUseCase();
      },
      Error,
      errorMsg
    );
  });
});

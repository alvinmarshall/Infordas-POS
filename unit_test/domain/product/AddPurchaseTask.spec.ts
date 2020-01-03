import { ProductRepository } from "../../../src/core/domain/repository/ProductRepository";
import { AddPurchaseTask } from "../../../src/core/domain/useCase/product/AddPurchaseTask";
import { mock, instance, when, verify } from "ts-mockito";
import { TestProductGenerator } from "../../utils/TestProductGenerator";
import { assert, expect } from "chai";

describe("domain.useCase.product AddPurchaseTask test", () => {
  let productRepository: ProductRepository;
  let productRepositoryInstance: ProductRepository;
  let addPurchaseTask: AddPurchaseTask;
  beforeEach(() => {
    productRepository = mock<ProductRepository>();
    productRepositoryInstance = instance(productRepository);
    addPurchaseTask = new AddPurchaseTask(productRepositoryInstance);
  });

  it("add new purchase with params success", async () => {
    const purchase = TestProductGenerator.purchase();
    const actual = "1 item inserted";
    when(productRepository.addPurchase(purchase)).thenResolve(actual);
    const expected = await addPurchaseTask.buildUseCase(purchase);
    assert.equal(actual, expected);
    verify(productRepository.addPurchase(purchase)).times(1);
  });

  it("add new purchase no params throws an exception", () => {
    const errorMsg = "purchase item can't be null";
    expect(() => {
      addPurchaseTask.buildUseCase();
    }).throw(errorMsg);
  });
});

import { ProductRepository } from "../../../src/core/domain/repository/ProductRepository";
import { AddCategoryTask } from "../../../src/core/domain/useCase/product/AddCategoryTask";
import { mock, instance, when } from "ts-mockito";
import { TestProductGenerator } from "../../utils/TestProductGenerator";
import { assert } from "chai";

describe("domain.useCase.product AddCategoryTask test", () => {
  let productRepository: ProductRepository;
  let productRepositoryInstance: ProductRepository;
  let addCategoryTask: AddCategoryTask;
  beforeEach(() => {
    productRepository = mock<ProductRepository>();
    productRepositoryInstance = instance(productRepository);
    addCategoryTask = new AddCategoryTask(productRepositoryInstance);
  });

  it("Add category with params success", async () => {
    const category = TestProductGenerator.category();
    const actual = "1 item inserted";
    when(productRepository.addCategory(category)).thenResolve(actual);
    const expected = await addCategoryTask.buildUseCase(category);
    assert.equal(expected, actual);
  });

  it("Add category with no params throws exception", () => {
    const errorMsg = "category params can't be null";
    assert.throw(
      () => {
        addCategoryTask.buildUseCase();
      },
      Error,
      errorMsg
    );
    
  });
});

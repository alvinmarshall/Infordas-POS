import { ProductRepository } from "../../../src/core/domain/repository/ProductRepository";
import { UpdateCategoryTask } from "../../../src/core/domain/useCase/product/UpdateCategoryTask";
import { mock, instance, when } from "ts-mockito";
import { TestProductGenerator } from "../../utils/TestProductGenerator";
import { assert } from "chai";

describe("domain.useCase.product UpdateCategoryTask test", () => {
  let productRepository: ProductRepository;
  let productRepositoryInstance: ProductRepository;
  let updateCategoryTask: UpdateCategoryTask;
  beforeEach(() => {
    productRepository = mock<ProductRepository>();
    productRepositoryInstance = instance(productRepository);
    updateCategoryTask = new UpdateCategoryTask(productRepositoryInstance);
  });

  it("Update Category with params success", async () => {
    const updatedCategory = TestProductGenerator.category();
    const actual = "1 item modified";
    when(productRepository.updateCategory(updatedCategory)).thenResolve(actual);
    const expected = await updateCategoryTask.buildUseCase(updatedCategory);
    assert.equal(expected, actual);
  });

  it("Update Category with params success", () => {
    const errMsg = "category update params can't be null";
    assert.throw(
      () => {
        updateCategoryTask.buildUseCase();
      },
      Error,
      errMsg
    );
  });
});

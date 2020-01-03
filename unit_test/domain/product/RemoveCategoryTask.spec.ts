import { ProductRepository } from "../../../src/core/domain/repository/ProductRepository";
import { RemoveCategoryTask } from "../../../src/core/domain/useCase/product/RemoveCategoryTask";
import { mock, instance, when } from "ts-mockito";
import { TestProductGenerator } from "../../utils/TestProductGenerator";
import { assert } from "chai";

describe("domain.useCase.product RemoveCategoryTask test", () => {
  let productRepository: ProductRepository;
  let productRepositoryInstance: ProductRepository;
  let removeCategoryTask: RemoveCategoryTask;
  beforeEach(() => {
    productRepository = mock<ProductRepository>();
    productRepositoryInstance = instance(productRepository);
    removeCategoryTask = new RemoveCategoryTask(productRepositoryInstance);
  });

  it("Remove category with params success", async () => {
    const identifier = TestProductGenerator.category().id.toString();
    const actual = "1 item removed";
    when(productRepository.removeCategory(identifier)).thenResolve(actual);
    const expected = await removeCategoryTask.buildUseCase(identifier);
    assert.equal(expected, actual);
  });

  it("Remove category with no params throws exception", () => {
    const errorMsg = "category identifier can't be null";
    assert.throw(()=>{removeCategoryTask.buildUseCase()},Error,errorMsg)
    
  });
});

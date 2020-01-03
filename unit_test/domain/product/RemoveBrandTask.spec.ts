import { ProductRepository } from "../../../src/core/domain/repository/ProductRepository";
import { mock, instance, when, verify } from "ts-mockito";
import { TestProductGenerator } from "../../utils/TestProductGenerator";
import { assert } from "chai";
import { RemoveBrandTask } from "../../../src/core/domain/useCase/product/RemoveBrandTask";

describe("domain.useCase.product RemoveBrandTask test", () => {
  let productRepository: ProductRepository;
  let productRepositoryInstance: ProductRepository;
  let removeBrandyTask: RemoveBrandTask;
  beforeEach(() => {
    productRepository = mock<ProductRepository>();
    productRepositoryInstance = instance(productRepository);
    removeBrandyTask = new RemoveBrandTask(productRepositoryInstance);
  });

  it("Remove brand with params success", async () => {
    const identifier = TestProductGenerator.brand().id.toString();
    const actual = "1 item removed";
    when(productRepository.removeBrand(identifier)).thenResolve(actual);
    const expected = await removeBrandyTask.buildUseCase(identifier);
    assert.equal(expected, actual);
    verify(productRepository.removeBrand(identifier)).times(1)
  });

  it("Remove brand with no params throws exception", () => {
    const errorMsg = "brand identifier can't be null";
    assert.throw(()=>{removeBrandyTask.buildUseCase()},Error,errorMsg)
    
  });
});

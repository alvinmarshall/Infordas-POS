import { ProductRepository } from "../../../src/core/domain/repository/ProductRepository";
import { mock, instance, when, verify } from "ts-mockito";
import { TestProductGenerator } from "../../utils/TestProductGenerator";
import { assert } from "chai";
import { UpdateBrandTask } from "../../../src/core/domain/useCase/product/UpdateBrandTask";

describe("domain.useCase.product UpdateBrandTask test", () => {
  let productRepository: ProductRepository;
  let productRepositoryInstance: ProductRepository;
  let updateBrandTask: UpdateBrandTask;
  beforeEach(() => {
    productRepository = mock<ProductRepository>();
    productRepositoryInstance = instance(productRepository);
    updateBrandTask = new UpdateBrandTask(productRepositoryInstance);
  });

  it("Update Brand with params success", async () => {
    const updateBrand = TestProductGenerator.brand();
    const actual = "1 item modified";
    when(productRepository.updateBrand(updateBrand)).thenResolve(actual);
    const expected = await updateBrandTask.buildUseCase(updateBrand);
    assert.equal(expected, actual);
    verify(productRepository.updateBrand(updateBrand)).times(1);
  });

  it("Update Brand with params success", () => {
    const errMsg = "brand update params can't be null";
    assert.throw(
      () => {
        updateBrandTask.buildUseCase();
      },
      Error,
      errMsg
    );
  });
});

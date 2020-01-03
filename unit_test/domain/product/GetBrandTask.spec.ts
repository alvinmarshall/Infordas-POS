import { ProductRepository } from "../../../src/core/domain/repository/ProductRepository";
import { mock, instance, when, verify } from "ts-mockito";
import { TestProductGenerator } from "../../utils/TestProductGenerator";
import { assert } from "chai";
import { GetBrandTask } from "../../../src/core/domain/useCase/product/GetBrandTask";

describe("domain.useCase.product GetBrandTask test", () => {
  let productRepository: ProductRepository;
  let productRepositoryInstance: ProductRepository;
  let getBrandTask: GetBrandTask;
  beforeEach(() => {
    productRepository = mock<ProductRepository>();
    productRepositoryInstance = instance(productRepository);
    getBrandTask = new GetBrandTask(productRepositoryInstance);
  });

  it("Get all brand with no params success", async () => {
    const actual = TestProductGenerator.getBrandList();
    when(productRepository.getBrands()).thenResolve(actual);
    const expected = await getBrandTask.buildUseCase();
    assert.equal(expected, actual);
    verify(productRepository.getBrands()).called();
    verify(productRepository.getBrandWithIdentifier("")).never();
  });

  it("Get category with params success", async () => {
    const identifier = "1";
    const actual = TestProductGenerator.getBrand();
    when(productRepository.getBrandWithIdentifier(identifier)).thenResolve(
      actual
    );
    const expected = await getBrandTask.buildUseCase(identifier);
    assert.equal(expected, actual);
    verify(productRepository.getBrandWithIdentifier(identifier)).called();
    verify(productRepository.getBrands()).never();
  });
});

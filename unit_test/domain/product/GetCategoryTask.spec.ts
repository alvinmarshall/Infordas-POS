import { ProductRepository } from "../../../src/core/domain/repository/ProductRepository";
import { GetCategoryTask } from "../../../src/core/domain/useCase/product/GetCategoryTask";
import { mock, instance, when, verify } from "ts-mockito";
import { TestProductGenerator } from "../../utils/TestProductGenerator";
import { assert } from "chai";

describe("domain.useCase.product GetCategoryTask test", () => {
  let productRepository: ProductRepository;
  let productRepositoryInstance: ProductRepository;
  let getCategoryTask: GetCategoryTask;
  beforeEach(() => {
    productRepository = mock<ProductRepository>();
    productRepositoryInstance = instance(productRepository);
    getCategoryTask = new GetCategoryTask(productRepositoryInstance);
  });

  it("Get all categories with no params success", async () => {
    const actual = TestProductGenerator.getcategoryList();
    when(productRepository.getCategories()).thenResolve(actual);
    const expected = await getCategoryTask.buildUseCase();
    assert.equal(expected, actual);
    verify(productRepository.getCategories()).called();
    verify(productRepository.getCategoryWithIdentifier("")).never();
  });

  it("Get category with params success", async () => {
    const identifier = "1";
    const actual = TestProductGenerator.getcategory();
    when(productRepository.getCategoryWithIdentifier(identifier)).thenResolve(
      actual
    );
    const expected = await getCategoryTask.buildUseCase(identifier);
    assert.equal(expected, actual);
    verify(productRepository.getCategoryWithIdentifier(identifier)).called();
    verify(productRepository.getCategories()).never();
  });
});

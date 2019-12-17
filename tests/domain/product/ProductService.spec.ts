import { ProductService } from "../../../src/app/api/product/product.service";
import { mock, instance, when, verify } from "ts-mockito";
import { ProductRepository } from "../../../src/core/domain/repository/ProductRepository";
import { AddProductTask } from "../../../src/core/domain/useCase/product/AddProductTask";
import { GetProductTask } from "../../../src/core/domain/useCase/product/GetProductTask";
import { UpdateProductTask } from "../../../src/core/domain/useCase/product/UpdateProductTask";
import { RemoveProductTask } from "../../../src/core/domain/useCase/product/RemoveProductTask";
import { AddCategoryTask } from "../../../src/core/domain/useCase/product/AddCategoryTask";
import { UpdateCategoryTask } from "../../../src/core/domain/useCase/product/UpdateCategoryTask";
import { GetCategoryTask } from "../../../src/core/domain/useCase/product/GetCategoryTask";
import { RemoveCategoryTask } from "../../../src/core/domain/useCase/product/RemoveCategoryTask";
import { TestProductGenerator } from "../../utils/TestProductGenerator";
import { assert } from "chai";

describe("app.product productController test", () => {
  let productRepository: ProductRepository;
  let productRepositoryInstance: ProductRepository;
  let service: ProductService;
  let addProduct: AddProductTask;
  let getProductTask: GetProductTask;
  let updateProductTask: UpdateProductTask;
  let removeProductTask: RemoveProductTask;
  let addCategoryTask: AddCategoryTask;
  let updateCategoryTask: UpdateCategoryTask;
  let getCategoryTask: GetCategoryTask;
  let removeCategoryTask: RemoveCategoryTask;

  beforeEach(() => {
    productRepository = mock<ProductRepository>();
    productRepositoryInstance = instance(productRepository);
    addCategoryTask = new AddCategoryTask(productRepositoryInstance);
    getCategoryTask = new GetCategoryTask(productRepositoryInstance);
    service = new ProductService(
      addProduct,
      getProductTask,
      updateProductTask,
      removeProductTask,
      addCategoryTask,
      updateCategoryTask,
      getCategoryTask,
      removeCategoryTask
    );
  });

  it("Add Category success", async () => {
    const category = TestProductGenerator.category();
    const actual = { message: "1 item inserted" };
    when(productRepository.addCategory(category)).thenResolve(actual);
    const expected = await service.addCategory(category);
    assert.equal(expected, actual);
    verify(productRepository.addCategory(category)).times(1);
  });

  it("Get all categories", async () => {
    const actual = TestProductGenerator.getcategoryList();
    when(productRepository.getCategories()).thenResolve(actual);
    const expected = await service.getCategories();
    assert.equal(expected, actual);
    verify(productRepository.getCategories()).times(1);
  });
});

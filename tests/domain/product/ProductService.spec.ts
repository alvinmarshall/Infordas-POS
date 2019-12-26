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
import { AddBrandTask } from "../../../src/core/domain/useCase/product/AddBrandTask";
import { GetBrandTask } from "../../../src/core/domain/useCase/product/GetBrandTask";
import { UpdateBrandTask } from "../../../src/core/domain/useCase/product/UpdateBrandTask";
import { RemoveBrandTask } from "../../../src/core/domain/useCase/product/RemoveBrandTask";
import { AddPurchaseTask } from "../../../src/core/domain/useCase/product/AddPurchaseTask";
import { BrandService } from "../../../src/app/api/product/brand.service";
import { CategoryService } from "../../../src/app/api/product/category.service";
import { PurchaseService } from "../../../src/app/api/product/purchase.service";

describe("app.product productController test", () => {
  let productRepository: ProductRepository;
  let productRepositoryInstance: ProductRepository;
  let addProduct: AddProductTask;
  let getProductTask: GetProductTask;
  let updateProductTask: UpdateProductTask;
  let removeProductTask: RemoveProductTask;
  let addCategoryTask: AddCategoryTask;
  let updateCategoryTask: UpdateCategoryTask;
  let getCategoryTask: GetCategoryTask;
  let removeCategoryTask: RemoveCategoryTask;
  let addBrandTask: AddBrandTask;
  let getBrandTask: GetBrandTask;
  let updatBrandTask: UpdateBrandTask;
  let removeBrandTask: RemoveBrandTask;
  let addPurchaseTask: AddPurchaseTask;

  let productService: ProductService;
  let purchaseService: PurchaseService;
  let brandService: BrandService;
  let categoryService: CategoryService;

  beforeEach(() => {
    productRepository = mock<ProductRepository>();
    productRepositoryInstance = instance(productRepository);
    addProduct = new AddProductTask(productRepositoryInstance);
    getProductTask = new GetProductTask(productRepositoryInstance);
    updateProductTask = new UpdateProductTask(productRepositoryInstance);
    removeProductTask = new RemoveProductTask(productRepositoryInstance);

    addCategoryTask = new AddCategoryTask(productRepositoryInstance);
    getCategoryTask = new GetCategoryTask(productRepositoryInstance);
    updateCategoryTask = new UpdateCategoryTask(productRepositoryInstance);
    removeCategoryTask = new RemoveCategoryTask(productRepositoryInstance);

    addBrandTask = new AddBrandTask(productRepositoryInstance);
    getBrandTask = new GetBrandTask(productRepositoryInstance);
    updatBrandTask = new UpdateBrandTask(productRepositoryInstance);
    removeBrandTask = new RemoveBrandTask(productRepositoryInstance);
    addPurchaseTask = new AddPurchaseTask(productRepositoryInstance);

    productService = new ProductService(
      addProduct,
      getProductTask,
      updateProductTask,
      removeProductTask
    );
    brandService = new BrandService(
      addBrandTask,
      getBrandTask,
      updatBrandTask,
      removeBrandTask
    );
    categoryService = new CategoryService(
      addCategoryTask,
      updateCategoryTask,
      getCategoryTask,
      removeCategoryTask
    );
    purchaseService = new PurchaseService(addPurchaseTask);
  });

  //
  // ─── PRODUCT ────────────────────────────────────────────────────────────────────
  //

  describe("Product service test", () => {});

  it("Add Product success", async () => {
    const product = TestProductGenerator.product();
    const actual = { message: "1 item inserted" };
    when(productRepository.addProduct(product)).thenResolve(actual);
    const expected = await productService.addProduct(product);
    assert.equal(expected, actual);
    verify(productRepository.addProduct(product)).times(1);
  });

  it("Get all product", async () => {
    const actual = TestProductGenerator.getProductList();
    when(productRepository.getProducts()).thenResolve(actual);
    const expected = await productService.getProducts();
    assert.equal(expected, actual);
    verify(productRepository.getProducts()).times(1);
    verify(productRepository.getProductWithIdentifier("")).never();
  });

  it("Get product", async () => {
    const identifier = "1";
    const actual = TestProductGenerator.getProduct();
    when(productRepository.getProductWithIdentifier(identifier)).thenResolve(
      actual
    );
    const expected = await productService.getProductWithIdentifier(identifier);
    assert.equal(expected, actual);
    verify(productRepository.getProductWithIdentifier(identifier)).times(1);
    verify(productRepository.getProducts()).never();
  });

  it("Update Product success", async () => {
    const product = TestProductGenerator.product();
    product.name = "update name";
    const actual = { message: "1 item modified" };
    when(productRepository.updateProduct(product)).thenResolve(actual);
    const expected = await productService.updateProduct(product);
    assert.equal(expected, actual);
    verify(productRepository.updateProduct(product)).times(1);
  });

  it("Remove product with params", async () => {
    const identifier = "1";
    const actual = { message: "1 item removed" };
    when(productRepository.removeProduct(identifier)).thenResolve(actual);
    const expected = await productService.removeProduct(identifier);
    assert.equal(expected, actual);
    verify(productRepository.removeProduct(identifier)).times(1);
  });

  //
  // ─── CATEGORY ───────────────────────────────────────────────────────────────────
  //

  describe("Category service test", () => {});

  it("Add Category success", async () => {
    const category = TestProductGenerator.category();
    const actual = { message: "1 item inserted" };
    when(productRepository.addCategory(category)).thenResolve(actual);
    const expected = await categoryService.addCategory(category);
    assert.equal(expected, actual);
    verify(productRepository.addCategory(category)).times(1);
  });

  it("Get all categories", async () => {
    const actual = TestProductGenerator.getcategoryList();
    when(productRepository.getCategories()).thenResolve(actual);
    const expected = await categoryService.getCategories();
    assert.equal(expected, actual);
    verify(productRepository.getCategories()).times(1);
  });

  it("Get category", async () => {
    const identifier = "1";
    const actual = TestProductGenerator.getcategory();
    when(productRepository.getCategoryWithIdentifier(identifier)).thenResolve(
      actual
    );
    const expected = await categoryService.getCategoryWithIdenfier(identifier);
    assert.equal(expected, actual);
    verify(productRepository.getCategoryWithIdentifier(identifier)).times(1);
    verify(productRepository.getCategories()).never();
  });

  it("Update Category success", async () => {
    const category = TestProductGenerator.category();
    category.name = "update name";
    const actual = { message: "1 item modified" };
    when(productRepository.updateCategory(category)).thenResolve(actual);
    const expected = await categoryService.updateCategory(category);
    assert.equal(expected, actual);
    verify(productRepository.updateCategory(category)).times(1);
  });

  it("Remove category with params", async () => {
    const identifier = "1";
    const actual = { message: "1 item removed" };
    when(productRepository.removeCategory(identifier)).thenResolve(actual);
    const expected = await categoryService.removeCategory(identifier);
    assert.equal(expected, actual);
    verify(productRepository.removeCategory(identifier)).times(1);
  });

  //
  // ─── BRAND ──────────────────────────────────────────────────────────────────────
  //
  describe("Brand service test", () => {
    it("Add Brand success", async () => {
      const brand = TestProductGenerator.brand();
      const actual = { message: "1 item inserted" };
      when(productRepository.addBrand(brand)).thenResolve(actual);
      const expected = await brandService.addBrand(brand);
      assert.equal(expected, actual);
      verify(productRepository.addBrand(brand)).times(1);
    });
  });

  it("Get all brand success", async () => {
    const actual = TestProductGenerator.getBrandList();
    when(productRepository.getBrands()).thenResolve(actual);
    const expected = await brandService.getBrands();
    assert.equal(expected, actual);
    verify(productRepository.getBrands()).times(1);
    verify(productRepository.getBrandWithIdentifier("")).times(0);
  });

  it("Get brand success", async () => {
    const identifier = "1";
    const actual = TestProductGenerator.getBrand();
    when(productRepository.getBrandWithIdentifier(identifier)).thenResolve(
      actual
    );
    const expected = await brandService.getBrandWithIdenfier(identifier);
    assert.equal(expected, actual);
    verify(productRepository.getBrandWithIdentifier(identifier)).times(1);
    verify(productRepository.getBrands()).never();
  });
  it("Update Brand success", async () => {
    const brand = TestProductGenerator.brand();
    brand.name = "update name";
    const actual = { message: "1 item modified" };
    when(productRepository.updateBrand(brand)).thenResolve(actual);
    const expected = await brandService.updateBrand(brand);
    assert.equal(expected, actual);
    verify(productRepository.updateBrand(brand)).times(1);
  });
  it("Remove brand with params", async () => {
    const identifier = "1";
    const actual = { message: "1 item removed" };
    when(productRepository.removeBrand(identifier)).thenResolve(actual);
    const expected = await brandService.removeBrand(identifier);
    assert.equal(expected, actual);
    verify(productRepository.removeBrand(identifier)).times(1);
  });

  //
  // ─── PURCHASE ───────────────────────────────────────────────────────────────────
  //
  describe("Purchase service test", () => {
    it("Add Purchase success", async () => {
      const purchase = TestProductGenerator.purchase();
      const actual = { message: "1 item inserted" };
      when(productRepository.addPurchase(purchase)).thenResolve(actual);
      const expected = await purchaseService.addPurchase(purchase);
      assert.equal(expected, actual);
      verify(productRepository.addPurchase(purchase)).times(1);
    });
  });
});

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

import { ProductService } from "./product.service";
import { injectable, inject } from "inversify";
import { Request, Response } from "express";
import { IProduct } from "../../../core/domain/entity/product/IProduct";
import uuidV4 from "uuid/v4";
import { ICategory } from "../../../core/domain/entity/product/ICategory";
import valueStrExists from "../../../common/utils/item-exist";
import { IBrand } from "../../../core/domain/entity/product/IBrand";
import { paginateRequest } from "../../../common/utils/pagination-request";
import { IPurchase } from "../../../core/domain/entity/product/IPurchase";
import { BrandService } from "./brand.service";
import { CategoryService } from "./category.service";
import { PurchaseService } from "./purchase.service";

@injectable()
export class ProductController {
  private productService: ProductService;
  private brandService: BrandService;
  private categoryService: CategoryService;
  private purchaseService: PurchaseService;

  constructor(
    @inject(ProductService) $productService: ProductService,
    @inject(BrandService) $brandService: BrandService,
    @inject(CategoryService) $categoryService: CategoryService,
    @inject(PurchaseService) $purchaseService: PurchaseService
  ) {
    this.productService = $productService;
    this.brandService = $brandService;
    this.categoryService = $categoryService;
    this.purchaseService = $purchaseService;
  }

  //
  // ─── PRODUCT ────────────────────────────────────────────────────────────────────
  //

  async addProduct(req: Request, res: Response) {
    try {
      const body: IProduct = req.body;
      body.uuid = uuidV4();
      const data = await this.productService.addProduct(body);
      return res.status(201).send({ data, status: 201 });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "An error occurred, try again", status: 500 });
    }
  }

  async getProducts(req: Request, res: Response) {
    try {
      const products = await this.productService.getProducts();
      const result = await paginateRequest(req, res, products);
      return res.send({ result, status: 200 });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "An error occurred, try again", status: 500 });
    }
  }

  async getProduct(req: Request, res: Response) {
    try {
      const identifier: string = req.params.identifier;
      const data = await this.productService.getProductWithIdentifier(
        identifier
      );
      return res.send({ data, status: 200 });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "An error occurred, try again", status: 500 });
    }
  }

  async updateProduct(req: Request, res: Response) {
    try {
      const body: IProduct = req.body;
      const data = await this.productService.updateProduct(body);
      return res.send({ data, status: 200 });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "An error occurred, try again", status: 500 });
    }
  }

  async removeProduct(req: Request, res: Response) {
    try {
      const identifier: string = req.params.identifier;
      const data = await this.productService.removeProduct(identifier);
      return res.send({ data, status: 200 });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "An error occurred, try again", status: 500 });
    }
  }

  //
  // ─── CATEGORY ───────────────────────────────────────────────────────────────────
  //
  async addCategory(req: Request, res: Response) {
    try {
      const body: ICategory = req.body;
      const data = await this.categoryService.addCategory(body);
      if (valueStrExists(data.message, "already exist"))
        return res.send({ data, status: 200 });
      return res.status(201).send({ data, status: 201 });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "An error occurred, try again", status: 500 });
    }
  }

  async updateCategory(req: Request, res: Response) {
    try {
      const body: ICategory = req.body;
      const data = await this.categoryService.updateCategory(body);
      return res.send({ data, status: 200 });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "An error occurred, try again", status: 500 });
    }
  }

  async getCategories(req: Request, res: Response) {
    try {
      const data = await this.categoryService.getCategories();
      return res.send({ data, status: 200 });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "An error occurred, try again", status: 500 });
    }
  }

  async getCategoryWithIdentifier(req: Request, res: Response) {
    try {
      const identifier: string = req.params.identifier;
      const data = await this.categoryService.getCategoryWithIdenfier(
        identifier
      );
      return res.send({ data, status: 200 });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "An error occurred, try again", status: 500 });
    }
  }

  async removeCategory(req: Request, res: Response) {
    try {
      const identifier: string = req.params.identifier;
      const data = await this.categoryService.removeCategory(identifier);
      return res.send({ data, status: 200 });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "An error occurred, try again", status: 500 });
    }
  }

  //
  // ─── BRAND ──────────────────────────────────────────────────────────────────────
  //

  async addBrand(req: Request, res: Response) {
    try {
      const body: IBrand = req.body;
      const data = await this.brandService.addBrand(body);
      if (valueStrExists(data.message, "already exist"))
        return res.send({ data, status: 200 });
      return res.status(201).send({ data, status: 201 });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "An error occurred, try again", status: 500 });
    }
  }

  async getBrands(req: Request, res: Response) {
    try {
      const data = await this.brandService.getBrands();
      return res.send({ data, status: 200 });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "An error occurred, try again", status: 500 });
    }
  }

  async getBrandWithIdentifier(req: Request, res: Response) {
    try {
      const identifier: string = req.params.identifier;
      const data = await this.brandService.getBrandWithIdenfier(identifier);
      return res.send({ data, status: 200 });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "An error occurred, try again", status: 500 });
    }
  }

  async updateBrand(req: Request, res: Response) {
    try {
      const body: IBrand = req.body;
      const data = await this.brandService.updateBrand(body);
      return res.send({ data, status: 200 });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "An error occurred, try again", status: 500 });
    }
  }

  async removeBrand(req: Request, res: Response) {
    try {
      const identifier: string = req.params.identifier;
      const data = await this.brandService.removeBrand(identifier);
      return res.send({ data, status: 200 });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "An error occurred, try again", status: 500 });
    }
  }

  //
  // ─── PURCHASE ───────────────────────────────────────────────────────────────────
  //
  async addPurchase(req: Request, res: Response) {
    try {
      const body: IPurchase = req.body;
      //@ts-ignore
      body.empId = req.user.uuid;
      const data = await this.purchaseService.addPurchase(body);
      return res.status(201).send({ data, status: 201 });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "An error occurred, try again", status: 500 });
    }
  }
}

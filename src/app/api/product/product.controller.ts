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

@injectable()
export class ProductController {
  private productService: ProductService;

  constructor(@inject(ProductService) $productService: ProductService) {
    this.productService = $productService;
  }

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
      const data = await this.productService.getProducts();
      return res.send({ data, status: 200 });
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
      const identifier:string = req.params.identifier;
      const data = await this.productService.removeProduct(identifier);
      return res.send({ data, status: 200 });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "An error occurred, try again", status: 500 });
    }
  }
}

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

import { IProduct } from "../../src/core/domain/entity/product/IProduct";
import { ICategory } from "../../src/core/domain/entity/product/ICategory";
import { IBrand } from "../../src/core/domain/entity/product/IBrand";
import { IPurchase } from "../../src/core/domain/entity/product/IPurchase";

export class TestProductGenerator {
  static product(): IProduct {
    return {
      id: 1,
      uuid: "test uuid",
      buyPrice: 1,
      retailPrice: 2,
      name: "test product",
      stock: 1
    };
  }

  static getProduct(): IProduct[] {
    return [
      {
        id: 1,
        uuid: "test uuid",
        buyPrice: 1,
        retailPrice: 2,
        name: "test product",
        stock: 1
      }
    ];
  }

  static getProductList(): IProduct[] {
    return [
      {
        id: 1,
        uuid: "test uuid",
        buyPrice: 1,
        retailPrice: 2,
        name: "test product",
        stock: 1
      },
      {
        id: 2,
        uuid: "test uuid2",
        buyPrice: 11,
        retailPrice: 2,
        name: "test product2",
        stock: 12
      }
    ];
  }

  static category(): ICategory {
    return {
      id: 1,
      name: "test name",
      description: "test description"
    };
  }

  static getcategory(): ICategory[] {
    return [
      {
        id: 1,
        name: "test name",
        description: "test description"
      }
    ];
  }

  static getcategoryList(): ICategory[] {
    return [
      {
        id: 1,
        name: "test name",
        description: "test description"
      },
      {
        id: 2,
        name: "test name2",
        description: "test description2"
      }
    ];
  }

  static brand(): IBrand {
    return {
      id: 1,
      name: "test name",
      description: "test description"
    };
  }

  static getBrand(): IBrand[] {
    return [
      {
        id: 1,
        name: "test name",
        description: "test description"
      }
    ];
  }

  static getBrandList(): IBrand[] {
    return [
      {
        id: 1,
        name: "test name",
        description: "test description"
      },
      {
        id: 2,
        name: "test name2",
        description: "test description2"
      }
    ];
  }

  static purchase(): IPurchase {
    return {
      invoiceNo: "test invoice no",
      supplierName: "test supplier name",
      name: "test product name",
      stock: 10,
      buyPrice: 12,
      retailPrice: 15,
      uuid: "test uuid",
      empId: "test empid"
    };
  }

  static getPurchase(): IPurchase[] {
    return [
      {
        invoiceNo: "test invoice no",
        supplierName: "test supplier name",
        name: "test product name",
        stock: 10,
        buyPrice: 12,
        retailPrice: 15,
        uuid: "test uuid",
        empId: "test empid"
      }
    ];
  }

  static getPurchaseList(): IPurchase[] {
    return [
      {
        invoiceNo: "test invoice no1",
        supplierName: "test supplier name",
        name: "test product name1",
        stock: 10,
        buyPrice: 12,
        retailPrice: 15,
        uuid: "test uuid",
        empId: "test empid"
      },
      {
        invoiceNo: "test invoice no2",
        supplierName: "test supplier name",
        name: "test product name2",
        stock: 4,
        buyPrice: 3,
        retailPrice: 5,
        uuid: "test uuid",
        empId: "test empid"
      }
    ];
  }
}

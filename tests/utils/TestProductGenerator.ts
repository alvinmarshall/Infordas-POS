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
}

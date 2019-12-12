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

import { ProductRepository } from "../../../domain/repository/ProductRepository";
import { IProduct } from "../../../domain/entity/product/IProduct";
import { RemoteDataSource } from "../../RemoteDataSource";
import { injectable, inject } from "inversify";
import { RemoteDataSourceImpl } from "../../../remote-source/source/RemoteDataSourceImpl";

@injectable()
export class ProductRepositoryImpl implements ProductRepository {
  private remoteSource: RemoteDataSource;

  /**
   * @constructor
   * @param $remoteSource RemoteDataSource require instance
   */
  constructor(@inject(RemoteDataSourceImpl) $remoteSource: RemoteDataSource) {
    this.remoteSource = $remoteSource;
  }

  addProduct(product: IProduct): Promise<any> {
    return this.remoteSource.addProduct(product);
  }
  getProducts(): Promise<IProduct[]> {
    return this.remoteSource.getProducts();
  }
  getProductWithIdentifier(identifier: string): Promise<IProduct[]> {
    return this.remoteSource.getProductWithIdentifier(identifier);
  }
  updateProduct(product: IProduct): Promise<any> {
    return this.remoteSource.updateProduct(product);
  }
  removeProduct(identifier: string): Promise<any> {
    return this.remoteSource.removeProduct(identifier);
  }
}

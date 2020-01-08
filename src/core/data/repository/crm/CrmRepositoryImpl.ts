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

import { CrmRepository } from "../../../domain/repository/CrmRepository";
import { IClient } from "../../../domain/entity/crm/IClient";
import { RemoteDataSource } from "../../source/remote-source/RemoteDataSource";
import { injectable, inject } from "inversify";
import { RemoteDataSourceImpl } from "../../source/remote-source/RemoteDataSourceImpl";

/**
 * CrmRepositoryImpl
 */
@injectable()
export class CrmRepositoryImpl implements CrmRepository {
  private remoteSource: RemoteDataSource;

  /**
   * @constructor
   * @param $remoteSource requires RemoteDataSource instance
   */
  constructor(@inject(RemoteDataSourceImpl) $remoteSource: RemoteDataSource) {
    this.remoteSource = $remoteSource;
  }

  addCustomer(customer: IClient): Promise<any> {
    return this.remoteSource.addCustomer(customer);
  }

  addSupplier(supplier: IClient): Promise<any> {
    return this.remoteSource.addSupplier(supplier);
  }
  getCustomer(): Promise<IClient[]> {
    return this.remoteSource.getCustomer();
  }
  getCustomerWithIdentifier(identifier: string): Promise<IClient[]> {
    return this.remoteSource.getCustomerWithIdentifier(identifier);
  }
  getSupplier(): Promise<IClient[]> {
    return this.remoteSource.getSupplier();
  }
  getSupplierWithIdentifier(identifier: string): Promise<IClient[]> {
    return this.remoteSource.getSupplierWithIdentifier(identifier);
  }
  updateCustomer(customer: IClient): Promise<any> {
    return this.remoteSource.updateCustomer(customer);
  }
  updateSupplier(supplier: IClient): Promise<any> {
    return this.remoteSource.updateSupplier(supplier);
  }
}

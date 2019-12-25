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

import { BaseUseCase } from "../base/BaseUseCase";
import { CrmRepository } from "../../repository/CrmRepository";
import { IClient } from "../../entity/crm/IClient";
import { Client_Type } from "../../../../common/constants";
import { injectable, inject } from "inversify";
import { CrmRepositoryImpl } from "../../../data/repository/crm/CrmRepositoryImpl";

/**
 * AddClientTask
 * super class  {@Links ../base/BaseUseCase}
 */
@injectable()
export class AddClientTask extends BaseUseCase<any, IClient> {
  private crmRepository: CrmRepository;

  /**
   * @constructor
   * @param $crmRepository requires CrmRepository instance
   */
  constructor(@inject(CrmRepositoryImpl) $crmRepository: CrmRepository) {
    super();
    this.crmRepository = $crmRepository;
  }

  protected generateUseCase(input?: IClient | undefined): Promise<any> {
    if (input == null) throw new Error("client params can't be null");
    if (input.type == null) throw new Error("client type not specified");
    if (input.type === Client_Type.CUSTOMER) {
      return this.crmRepository.addCustomer(input);
    }
    if (input.type === Client_Type.SUPPLIER) {
      return this.crmRepository.addSupplier(input);
    }
    throw new Error("client type action is not handled");
  }
}

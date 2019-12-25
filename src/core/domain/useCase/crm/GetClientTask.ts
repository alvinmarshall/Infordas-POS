import { BaseUseCase } from "../base/BaseUseCase";
import { IClient } from "../../entity/crm/IClient";
import { CrmRepository } from "../../repository/CrmRepository";
import { injectable, inject } from "inversify";
import { CrmRepositoryImpl } from "../../../data/repository/crm/CrmRepositoryImpl";
import { IClientParams } from "../../entity/crm/IClientParams";
import { Client_Type } from "../../../../common/constants";

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

@injectable()
export class GetClientTask extends BaseUseCase<IClient[], IClientParams> {
  private crmRepository: CrmRepository;

  constructor(@inject(CrmRepositoryImpl) $crmRepository: CrmRepository) {
    super();
    this.crmRepository = $crmRepository;
  }
  protected generateUseCase(
    input?: IClientParams | undefined
  ): Promise<IClient[]> {
    if (input == null) throw new Error("client params can't be null");

    switch (input.type) {
      case Client_Type.CUSTOMER:
        if (input.identifier)
          return this.crmRepository.getCustomerWithIdentifier(input.identifier);
        return this.crmRepository.getCustomer();
      case Client_Type.SUPPLIER:
        if (input.identifier)
          return this.crmRepository.getSupplierWithIdentifier(input.identifier);
        return this.crmRepository.getSupplier();

      default:
        break;
    }

    return Promise.reject("client type not specified");
  }
}

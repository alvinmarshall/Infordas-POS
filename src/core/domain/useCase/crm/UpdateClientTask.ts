import { BaseUseCase } from "../base/BaseUseCase";
import { IClient } from "../../entity/crm/IClient";
import { injectable, inject } from "inversify";
import { CrmRepository } from "../../repository/CrmRepository";
import { Client_Type } from "../../../../common/constants";
import { CrmRepositoryImpl } from "../../../data/repository/crm/CrmRepositoryImpl";

@injectable()
export class UpdateClientTask extends BaseUseCase<any, IClient> {
  crmRepository: CrmRepository;

  constructor(@inject(CrmRepositoryImpl) $crmRepository: CrmRepository) {
    super();
    this.crmRepository = $crmRepository;
  }

  protected generateUseCase(input?: IClient | undefined): Promise<any> {
    if (input == null) throw new Error("client params can't be null");
    switch (input?.type) {
      case Client_Type.CUSTOMER:
        return this.crmRepository.updateCustomer(input);
      case Client_Type.SUPPLIER:
        return this.crmRepository.updateSupplier(input);
      default:
        return Promise.reject("client type not specified");
    }
  }
}

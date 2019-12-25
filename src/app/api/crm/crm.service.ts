import { AddClientTask } from "../../../core/domain/useCase/crm/AddClientTask";
import { IClient } from "../../../core/domain/entity/crm/IClient";
import { injectable, inject } from "inversify";
import { IClientParams } from "../../../core/domain/entity/crm/IClientParams";
import { GetClientTask } from "../../../core/domain/useCase/crm/GetClientTask";

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

/**
 * CrmService
 */
@injectable()
export class CrmService {
  private addClientTask: AddClientTask;
  private getClientTask: GetClientTask;

  constructor(
    @inject(AddClientTask) $addClientTask: AddClientTask,
    @inject(GetClientTask) $getClientTask: GetClientTask
  ) {
    this.addClientTask = $addClientTask;
    this.getClientTask = $getClientTask;
  }

  addClient(client: IClient): Promise<any> {
    return this.addClientTask.buildUseCase(client);
  }

  getCustomers(params: IClientParams): Promise<IClient[]> {
    return this.getClientTask.buildUseCase(params);
  }

  getSuppliers(params: IClientParams): Promise<IClient[]> {
    return this.getClientTask.buildUseCase(params);
  }

}

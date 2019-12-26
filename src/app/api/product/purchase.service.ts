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

import { AddPurchaseTask } from "../../../core/domain/useCase/product/AddPurchaseTask";

import { inject, injectable } from "inversify";

import { IPurchase } from "../../../core/domain/entity/product/IPurchase";

@injectable()
export class PurchaseService {
  private addPurchaseTask: AddPurchaseTask;

  constructor(@inject(AddPurchaseTask) $addPurchaseTask: AddPurchaseTask) {
    this.addPurchaseTask = $addPurchaseTask;
  }

  //
  // ─── PURCHASE ───────────────────────────────────────────────────────────────────
  //
  addPurchase(purchase: IPurchase): Promise<any> {
    return this.addPurchaseTask.buildUseCase(purchase);
  }
}

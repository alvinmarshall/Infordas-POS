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

import { IClient } from "../../src/core/domain/entity/crm/IClient";
import { Client_Type } from "../../src/common/constants";

export class TestCrmGenerator {
  static customer(): IClient {
    return {
      name: "test name",
      uid: "test uid",
      type: Client_Type.CUSTOMER
    };
  }

  static supplier(): IClient {
    return {
      name: "test name",
      uid: "test uid",
      type: Client_Type.SUPPLIER
    };
  }

  static getCustomer(): IClient[] {
    return [
      {
        name: "test name",
        uid: "test uid",
        type: Client_Type.CUSTOMER
      }
    ];
  }
  static getSupplier(): IClient[] {
    return [
      {
        name: "test name",
        uid: "test uid",
        type: Client_Type.SUPPLIER
      }
    ];
  }

  static getCustomerList(): IClient[] {
    return [
      {
        name: "test name",
        uid: "test uid"
      },
      {
        name: "test name",
        uid: "test uid"
      }
    ];
  }
  static getSupplierList(): IClient[] {
    return [
      {
        name: "test name",
        uid: "test uid"
      },
      {
        name: "test name",
        uid: "test uid"
      }
    ];
  }
}

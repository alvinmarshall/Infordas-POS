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

import { ICompany } from "../../src/core/domain/entity/company/ICompany";
import { IBranch } from "../../src/core/domain/entity/branch/IBranch";

export class TestCompanyGenerator {
  static create(): ICompany {
    return {
      id: 0,
      name: "test name",
      location: "test location",
      address: "test address",
      contactNo: "test contact",
      email: "test email",
      website: "test website"
    };
  }

  static createBranch(): IBranch {
    return {
      id: 0,
      compId: 0,
      contactNo: "test contact",
      email: "test email",
      empId: "test empId",
      location: "test location",
      name: "test name",
      uuid: "test uuid",
      website: "test website",
      address:"test address"
    };
  }
}

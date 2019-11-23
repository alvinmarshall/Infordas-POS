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

import { EmployeeEntity } from "../../src/core/domain/entity/employee/EmployeeEntity";
import { IEmployee } from "../../src/core/domain/entity/employee/IEmployee";
import { IEmployeeOther } from "../../src/core/domain/entity/employee/IEmployeeOther";

/**
 * TestEmployeeGenerator class
 */
export class TestEmployeeGenerator {
  static getEmployeeInfo(): EmployeeEntity {
    return new EmployeeEntity({
      id: 1,
      status: 1,
      dob: "test dob",
      address: "test address",
      contact: "test contact",
      email: "test email",
      empId: "test uuid",
      fullName: "test fullname",
      gender: "test gender"
    });
  }

  static newEmployee(): IEmployee {
    return {
      id: 1,
      status: 1,
      dob: "test dob",
      address: "test address",
      contact: "test contact",
      email: "test email",
      empId: "test uuid",
      fullName: "test fullname",
      gender: "test gender"
    };
  }

  static createDetailInfo(): IEmployeeOther {
    return {
      religion: "test religtion",
      maritalStatus: "test marital status"
    };
  }

  static getEmployeeList(): IEmployee[] {
    return [
      {
        id: 1,
        status: 1,
        dob: "test dob",
        address: "test address",
        contact: "test contact",
        email: "test email",
        empId: "test uuid",
        fullName: "test fullname",
        gender: "test gender"
      },
      {
        id: 2,
        status: 1,
        dob: "test dob",
        address: "test address",
        contact: "test contact",
        email: "test email",
        empId: "test uuid",
        fullName: "test fullname",
        gender: "test gender"
      }
    ];
  }

  static getEmployee(): IEmployee[] {
    return [
      {
        id: 1,
        status: 1,
        dob: "test dob",
        address: "test address",
        contact: "test contact",
        email: "test email",
        empId: "test uuid",
        fullName: "test fullname",
        gender: "test gender"
      }
    ];
  }
}

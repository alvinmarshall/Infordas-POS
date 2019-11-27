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

import { EmployeeService } from "./employee.service";
import { injectable, inject } from "inversify";
import { Request, Response } from "express";
import uuidV4 from "uuid/v4";
import { IEmployeeOther } from "../../../core/domain/entity/employee/IEmployeeOther";
import { IEmployee } from "../../../core/domain/entity/employee/IEmployee";

/**
 * EmployeeController
 */
@injectable()
export class EmployeeController {
  private employeeService: EmployeeService;

  constructor(@inject(EmployeeService) $employeeService: EmployeeService) {
    this.employeeService = $employeeService;
  }

  async addNewEmployee(req: Request, res: Response) {
    try {
      const body: IEmployee = req.body;
      body.empId = uuidV4();
      const data = await this.employeeService.addNewEmployee(body);
      data.uuid = body.empId;
      res.status(201).send({ data, status: 201 });
    } catch (error) {
      console.error(error);
      return res.send("An error occured, try again");
    }
  }

  async setAccountStatus(req: Request, res: Response) {
    try {
      const empId = "2b48d086-14a8-421e-a4b8-29e96c08a139";
      const status = 1;
      const data = await this.employeeService.setAccountStatus(empId, status);
      return res.send({ data });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "An error occurred, try again", status: 500 });
    }
  }

  async addEmployeeDetailInfo(req: Request, res: Response) {
    try {
      const body: IEmployeeOther = req.body;
      const data = await this.employeeService.addEmployeeDetails(body);
      return res.send({ data, status: 200 });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "An error occurred, try again", status: 500 });
    }
  }

  async getEmployees(req: Request, res: Response) {
    try {
      const data = await this.employeeService.getEmployees();
      return res.send({ data, status: 200 });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "An error occurred, try again", status: 500 });
    }
  }
  async getEmployee(req: Request, res: Response) {
    try {
      const params = req.params.identifier;
      const data = await this.employeeService.getEmployeeWithIdentifier(params);
      return res.send({ data, status: 200 });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "An error occurred, try again", status: 500 });
    }
  }
}

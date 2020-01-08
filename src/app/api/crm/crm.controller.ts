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

import { CrmService } from "./crm.service";
import { inject, injectable } from "inversify";
import { Request, Response } from "express";
import { IClient } from "../../../core/domain/entity/crm/IClient";
import { Client_Type } from "../../../common/constants";
import v4 from "uuid/v4";
import { IClientParams } from "../../../core/domain/entity/crm/IClientParams";
@injectable()
export class CrmController {
  private crmService: CrmService;

  constructor(@inject(CrmService) $crmService: CrmService) {
    this.crmService = $crmService;
  }

  async addCustomer(req: Request, res: Response) {
    try {
      const body: IClient = req.body;
      body.uid = v4();
      body.type = Client_Type.CUSTOMER;
      const data = await this.crmService.addClient(body);
      return res.status(201).send({ data, status: 201 });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "Internal error occurred", status: 500 });
    }
  }

  async addSupplier(req: Request, res: Response) {
    try {
      const body: IClient = req.body;
      body.uid = v4();
      body.type = Client_Type.SUPPLIER;
      const data = await this.crmService.addClient(body);
      return res.status(201).send({ data, status: 201 });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "Internal error occurred", status: 500 });
    }
  }

  async getCustomers(req: Request, res: Response) {
    try {
      const parmas: IClientParams = { type: Client_Type.CUSTOMER };
      const data = await this.crmService.getCustomers(parmas);
      return res.send({ data, status: 200 });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "Internal error occurred", status: 500 });
    }
  }

  async getCustomerWithIdentifier(req: Request, res: Response) {
    try {
      const identifier = req.params.identifier;
      const parmas: IClientParams = {
        type: Client_Type.CUSTOMER,
        identifier
      };
      const data = await this.crmService.getCustomers(parmas);
      return res.send({ data, status: 200 });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "Internal error occurred", status: 500 });
    }
  }

  async getSuppliers(req: Request, res: Response) {
    try {
      const parmas: IClientParams = { type: Client_Type.SUPPLIER };
      const data = await this.crmService.getSuppliers(parmas);
      return res.send({ data, status: 200 });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "Internal error occurred", status: 500 });
    }
  }

  async getSupplierWithIdentifier(req: Request, res: Response) {
    try {
      const identifier = req.params.identifier;
      const parmas: IClientParams = {
        type: Client_Type.SUPPLIER,
        identifier
      };
      const data = await this.crmService.getSuppliers(parmas);
      return res.send({ data, status: 200 });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "Internal error occurred", status: 500 });
    }
  }

  async updateCustomer(req: Request, res: Response) {
    try {
      const body: IClient = req.body;
      body.type = Client_Type.CUSTOMER;
      const data = await this.crmService.updateClient(body);
      return res.send({ data, status: 200 });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "Internal error occurred", status: 500 });
    }
  }

  async updateSupplier(req: Request, res: Response) {
    try {
      const body: IClient = req.body;
      body.type = Client_Type.SUPPLIER;
      const data = await this.crmService.updateClient(body);
      return res.send({ data, status: 200 });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "Internal error occurred", status: 500 });
    }
  }
}

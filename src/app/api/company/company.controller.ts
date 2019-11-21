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

import { injectable, inject } from "inversify";
import { CompanyService } from "./company.service";
import { Request, Response } from "express";
import { ICompany } from "../../../core/domain/entity/company/ICompany";
import { IBranch } from "../../../core/domain/entity/branch/IBranch";
/**
 * CompanyController class
 */
@injectable()
export class CompanyController {
  private companyService: CompanyService;

  constructor(@inject(CompanyService) $companyService: CompanyService) {
    this.companyService = $companyService;
  }

  //
  // ─── BRANCH ─────────────────────────────────────────────────────────────────────
  //

  async addBranch(req: Request, res: Response) {
    try {
      const body = req.body;
      const data = await this.companyService.addBranch(body);
      return res.status(201).send({ data, status: 201 });
    } catch (error) {
      return res
        .status(500)
        .send({ message: "Internal error occurred", status: 500 });
    }
  }

  async updateBranch(req: Request, res: Response) {
    try {
      const body = req.body;
      const data = await this.companyService.updateBranch(body);
      return res.status(200).send({ data, status: 200 });
    } catch (error) {
      return res
        .status(500)
        .send({ message: "Internal error occurred", status: 500 });
    }
  }

  async removeBranch(req: Request, res: Response) {
    try {
      const body = req.body;
      const data = await this.companyService.removeBranch(body);
      return res.status(200).send({ data, status: 200 });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "Internal error occurred", status: 500 });
    }
  }

  //#region company
  //
  // ─── COMPANY ────────────────────────────────────────────────────────────────────
  //

  async addCompany(req: Request, res: Response) {
    try {
      const body: ICompany = req.body;
      const data = await this.companyService.addCompany(body);
      return res.status(201).send({ data, status: 201 });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "Internal error occurred", status: 500 });
    }
  }

  async updateCompany(req: Request, res: Response) {
    try {
      const body:ICompany = req.body;
      const data = await this.companyService.updateCompany(body);
      return res.status(200).send({ data, status: 200 });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "Internal error occurred", status: 500 });
    }
  }

  async removeCompany(req: Request, res: Response) {
    try {
      const body = req.body;
      const data = await this.companyService.removeCompany(body);
      return res.status(200).send({ data, status: 200 });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "Internal error occurred", status: 500 });
    }
  }

  async getCompanies(req: Request, res: Response) {
    try {
      const data = await this.companyService.getCompanies();
      const message =
        data.length == 0 ? "No record available" : "Available records";

      return res.status(200).send({
        message,
        data,
        status: 200
      });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "Internal error occurred", status: 500 });
    }
  }

  async getCompany(req: Request, res: Response) {
    try {
      const params = req.params;
      const data = await this.companyService.getCompany(params.id);
      const message =
        data.length == 0 ? "No record available" : "Available records";
      return res.status(201).send({ data });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "Internal error occurred", status: 500 });
    }
  }

  //#endregion
}

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
import { v4 } from "uuid";
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
      const result = await this.companyService.addBranch(body);
      return res.status(201).send({ result, status: 201 });
    } catch (error) {
      return res.status(500).send({ message: "Internal error occurred " });
    }
  }

  async updateBranch(req: Request, res: Response) {
    try {
      const body = req.body;
      const result = await this.companyService.updateBranch(body);
      return res.status(201).send({ result, status: 201 });
    } catch (error) {
      return res.status(500).send({ message: "Internal error occurred " });
    }
  }

  async removeBranch(req: Request, res: Response) {
    try {
      const body = req.body;
      const results = await this.companyService.removeBranch(body);
      return res.status(201).send({ results, status: 201 });
    } catch (error) {
      console.error(error);
      return res.status(500).send({ message: "Internal error occurred" });
    }
  }

  //#region company
  //
  // ─── COMPANY ────────────────────────────────────────────────────────────────────
  //

  async addCompany(req: Request, res: Response) {
    try {
      const body = req.body;
      const results = await this.companyService.addCompany(body);
      return res.status(201).send({ results, status: 201 });
    } catch (error) {
      console.error(error);
      return res.status(500).send({ message: "Internal error occurred" });
    }
  }

  async updateCompany(req: Request, res: Response) {
    try {
      const body = req.body;
      const results = await this.companyService.updateCompany(body);
      return res.status(201).send({ results, status: 201 });
    } catch (error) {
      console.error(error);
      return res.status(500).send({ message: "Internal error occurred" });
    }
  }

  async removeCompany(req: Request, res: Response) {
    try {
      const body = req.body;
      const results = await this.companyService.removeCompany(body);
      return res.status(201).send({ results, status: 201 });
    } catch (error) {
      console.error(error);
      return res.status(500).send({ message: "Internal error occurred" });
    }
  }
  //#endregion
}

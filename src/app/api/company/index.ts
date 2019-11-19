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

//
// ─── COMPANY ROUTE ──────────────────────────────────────────────────────────────
//
import "reflect-metadata";
import express from "express";
import DIContainer from "../../loc/di.container";
import { CompanyController } from "./company.controller";
const router = express.Router();
const controller = DIContainer.resolve<CompanyController>(CompanyController);

//#region branch
//
// ─── ADD BRANCH ─────────────────────────────────────────────────────────────────
//
router.post("/create-branch", (req, res) => {
  controller.addBranch(req, res);
});

//
// ─── UPDATE BRANCH ──────────────────────────────────────────────────────────────
//

router.put("/update-branch", (req, res) => {
  controller.updateBranch(req, res);
});
//
// ─── DELETE BRANCH ──────────────────────────────────────────────────────────────
//

router.delete("/delete-branch", (req, res) => {
  controller.removeBranch(req, res);
});
//#endregion

//#region company
//
// ─── ADD COMPANY ────────────────────────────────────────────────────────────────
//

router.post("/create-company", (req, res) => {
  controller.addCompany(req, res);
});

// router.get("/create", (req, res) => {
//   controller.addCompany(req, res);
// });

//
// ─── UPDATE COMPANY ─────────────────────────────────────────────────────────────
//

router.put("/update-company", (req, res) => {
  controller.updateCompany(req, res);
});

//
// ─── DELETE COMPANY ─────────────────────────────────────────────────────────────
//
router.delete("/delete-company", (req, res) => {
  controller.removeCompany(req, res);
});
//#endregion

export default router;

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

import "reflect-metadata";
import express from "express";
import DIContainer from "../../loc/di.container";
import { CrmController } from "./crm.controller";
import passport from "passport";
const controller = DIContainer.resolve<CrmController>(CrmController);
const router = express.Router();

router.post(
  "/create-customer",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    controller.addCustomer(req, res);
  }
);

router.post(
  "/create-supplier",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    controller.addSupplier(req, res);
  }
);

router.get(
  "/customers",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    controller.getCustomers(req, res);
  }
);
router.get(
  "/customer/:identifier",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    controller.getCustomerWithIdentifier(req, res);
  }
);

router.get(
  "/suppliers",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    controller.getSuppliers(req, res);
  }
);
router.get(
  "/supplier/:identifier",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    controller.getSupplierWithIdentifier(req, res);
  }
);

router.put(
  "/update-supplier",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    controller.updateSupplier(req, res);
  }
);

router.put(
  "/update-customer",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    controller.updateCustomer(req, res);
  }
);

export default router;

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
// ─── USER ROUTE ─────────────────────────────────────────────────────────────────
//

import "reflect-metadata";
import express from "express";
import DIContainer from "../../loc/di.container";
import { UserController } from "./user.controller";
import passport from "passport";

const router = express.Router();
const controller = DIContainer.resolve<UserController>(UserController);

//
// ─── AUTHENTICATE USER ──────────────────────────────────────────────────────────
//

router.post("/login", (req, res) => {
  controller.getAuthenticateUser(req, res);
});

//
// ─── REGISTER USER ──────────────────────────────────────────────────────────────
//

router.post(
  "/register",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    controller.createUserAccount(req, res);
  }
);

//
// ─── GET NUMBER OF USERS ────────────────────────────────────────────────────────
//

router.get(
  "/counts",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    controller.getUsersCount(req, res);
  }
);

router.post(
  "/admin/register",
  // passport.authenticate("jwt", { session: false }),
  (req, res) => {
    controller.createAdminAccount(req, res);
  }
);
export default router;

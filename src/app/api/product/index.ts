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

import express from "express";
import DIContainer from "../../loc/di.container";
import { ProductController } from "./product.controller";
import passport from "passport";

const router = express.Router();
const controller = DIContainer.resolve<ProductController>(ProductController);

//
// ─── PRODUCT ────────────────────────────────────────────────────────────────────
//

router.post(
  "/create-product",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    controller.addProduct(req, res);
  }
);

router.get(
  "/products",
  // passport.authenticate("jwt", { session: false }),
  (req, res) => {
    controller.getProducts(req, res);
  }
);

router.get(
  "/product/:identifier",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    controller.getProduct(req, res);
  }
);

router.put(
  "/update-product",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    controller.updateProduct(req, res);
  }
);

router.delete(
  "/product/:identifier",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    controller.removeProduct(req, res);
  }
);

//
// ─── CATEGORY ───────────────────────────────────────────────────────────────────
//
router.post(
  "/create-category",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    controller.addCategory(req, res);
  }
);

router.put(
  "/update-category",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    controller.updateCategory(req, res);
  }
);

router.get(
  "/categories",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    controller.getCategories(req, res);
  }
);
router.get(
  "/category/:identifier",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    controller.getCategoryWithIdentifier(req, res);
  }
);
router.delete(
  "/category/:identifier",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    controller.removeCategory(req, res);
  }
);

//
// ─── BRAND ──────────────────────────────────────────────────────────────────────
//
router.post(
  "/create-brand",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    controller.addBrand(req, res);
  }
);
router.get(
  "/brands",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    controller.getBrands(req, res);
  }
);
router.get(
  "/brand/:identifier",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    controller.getBrandWithIdentifier(req, res);
  }
);

router.put(
  "/update-brand",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    controller.updateBrand(req, res);
  }
);

router.delete(
  "/brand/:identifier",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    controller.removeBrand(req, res);
  }
);

export default router;

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
import { FileController } from "./file.controller";

const router = express.Router();
const controller = DIContainer.resolve<FileController>(FileController);
//
// ─── UPLOAD ANY FILE ────────────────────────────────────────────────────────────
//body -- file (upload file),identifier (uuid),type (location dir)


router.post("/upload", (req, res) => {
  controller.uploadFiles(req, res);
});

//
// ─── DOWNLOAD ANY FILE ──────────────────────────────────────────────────────────
//
router.get("/download", (req, res) => {
  controller.downloadFile(req, res);
});

export default router;

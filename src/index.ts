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
import path from "path";
import express, { Express } from "express";
import config from "config";
import cors from "cors";
import bodyParser from "body-parser";
import fileUploader from "express-fileupload";
import router from "./app/router";
import DIContainer from "./app/loc/di.container";
import PassportService from "./app/api/auth/passport-config";
const app: Express = express();
const port: number = config.get("port") || 3000;
const passService = DIContainer.resolve<PassportService>(PassportService);
//middleware
app.use(express.static(path.join(__dirname, config.get("asset"))));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(fileUploader());
router(app);
passService.init();
app.listen(port, "0.0.0.0", () => {
  console.log(`${config.get("name")} running on port: ${port}`);
});

export default app;

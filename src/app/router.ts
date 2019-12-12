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

import { Express } from "express";
import userRoute from "./api/user";
import employeeRoute from "./api/employee";
import rankRoute from "./api/rank";
import companyRoute from "./api/company";
import fileRoute from "./api/files";
import productRoute from "./api/product"

export default (app: Express) => {
  app.use("/users", userRoute);
  app.use("/employee", employeeRoute);
  app.use("/rank", rankRoute);
  app.use("/company", companyRoute);
  app.use("/files", fileRoute);
  app.use("/product",productRoute)
};

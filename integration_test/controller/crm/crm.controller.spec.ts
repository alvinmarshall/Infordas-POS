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

import { agent } from "supertest";
import app from "../../../src";
import { TestUserGeneratorTest } from "../../../unit_test/utils/TestUserGenerator";
import { ICredentials } from "../../../src/core/domain/entity/user/IAuthenticationParams";
import { expect, assert } from "chai";
import { TestCrmGenerator } from "../../../unit_test/utils/TestCrmGenerator";

describe("controller.crm CrmController Test", () => {
  let authToken: string;
  let customerIdentifier: string;
  let supplierIdentifier: string;

  before(async () => {
    const { username, password } = TestUserGeneratorTest.admin();
    const body: ICredentials = { username, password };
    body.username = `admin_${username}`;
    const res = await agent(app)
      .post("/users/login")
      .send(body);
    expect(res.status).to.be.equal(200);
    const { token } = res.body.data;
    authToken = `Bearer ${token}`;
  });

  it("POST /crm/create-customer success", async () => {
    const customer = TestCrmGenerator.supplier();
    const res = await agent(app)
      .post("/crm/create-customer")
      .set("Authorization", authToken)
      .send(customer)
      .expect(201);
    // console.log("create-customer", res.body);
  });

  it("POST /crm/create-supplier success", async () => {
    const supplier = TestCrmGenerator.supplier();
    const res = await agent(app)
      .post("/crm/create-supplier")
      .set("Authorization", authToken)
      .send(supplier)
      .expect(201);
    // console.log("create-supplier", res.body);
  });

  it("GET /crm/customers success", async () => {
    const res = await agent(app)
      .get("/crm/customers")
      .set("Authorization", authToken)
      .expect(200);
    assert.isNotEmpty(res.body.data);
    customerIdentifier = res.body.data[0].uid;
  });

  it("GET /crm/suppliers success", async () => {
    const res = await agent(app)
      .get("/crm/suppliers")
      .set("Authorization", authToken)
      .expect(200);
    assert.isNotEmpty(res.body.data);
    supplierIdentifier = res.body.data[0].uid;
  });

  it("GET /crm/customer/:identifier success", async () => {
    const res = await agent(app)
      .get(`/crm/customer/${customerIdentifier}`)
      .set("Authorization", authToken)
      .expect(200);
    assert.isNotEmpty(res.body.data);
    // console.log("cusp",res.body)
  });

  it("GET /crm/supplier/:identifier success", async () => {
    const res = await agent(app)
      .get(`/crm/supplier/${supplierIdentifier}`)
      .set("Authorization", authToken)
      .expect(200);
    assert.isNotEmpty(res.body.data);
    // console.log("sup",res.body)
  });

  it("PUT /crm/update-supplier success", async () => {
    const supplier = TestCrmGenerator.supplier();
    const res = await agent(app)
      .put("/crm/update-supplier")
      .set("Authorization", authToken)
      .send(supplier)
      .expect(200);
    assert.isNotEmpty(res.body.data.message);
  });

  it("PUT /crm/update-customer success", async () => {
    const customer = TestCrmGenerator.customer();
    const res = await agent(app)
      .put("/crm/update-customer")
      .set("Authorization", authToken)
      .send(customer)
      .expect(200);
    assert.isNotEmpty(res.body.data.message);
  });

  
});

import { TestUserGeneratorTest } from "../../../tests/utils/TestUserGenerator";

import { ICredentials } from "../../../src/core/domain/entity/user/IAuthenticationParams";

import { agent } from "supertest";

import app from "../../../src";

import { expect, assert } from "chai";
import { TestCompanyGenerator } from "../../../tests/utils/TestCompanyGenerator";

describe("controller.company CompanyController Test", () => {
  let authToken: string;
  let companyIdentifier: string;
  let branchIdentifier: string;

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

  it("POST /company/create-company success", async () => {
    const actual = "1 record inserted";
    const company = TestCompanyGenerator.create();
    const res = await agent(app)
      .post("/company/create-company")
      .set("Authorization", authToken)
      .send(company)
      .expect(201);
    assert.isNotEmpty(res.body.data.message);
    const expected = await res.body.data.message;
    assert.equal(actual, expected);
  });

  it("GET /company/companies success", async () => {
    const res = await agent(app)
      .get("/company/companies")
      .set("Authorization", authToken)
      .expect(200);
    assert.isNotEmpty(res.body.data);
    companyIdentifier = res.body.data[0].id;
  });

  it("UPDATE /company/update-company success", async () => {
    const actual = "1 record modified";
    const company = TestCompanyGenerator.create();
    company.name = "test update name";
    company.id = companyIdentifier;

    const res = await agent(app)
      .put("/company/update-company")
      .set("Authorization", authToken)
      .send(company)
      .expect(200);
    assert.isNotEmpty(res.body.data.message);
    const expected = res.body.data.message;
    assert.equal(actual, expected);
  });

  it("GET /company/company/:identifier success", async () => {
    const res = await agent(app)
      .get(`/company/company/${companyIdentifier}`)
      .set("Authorization", authToken)
      .expect(200);
    assert.isNotEmpty(res.body.data);
  });

  it("POST /company/create-branch success", async () => {
    const actual = "1 record inserted";
    const branch = TestCompanyGenerator.createBranch();
    branch.compId = companyIdentifier;
    const res = await agent(app)
      .post("/company/create-branch")
      .set("Authorization", authToken)
      .send(branch)
      .expect(201);
    assert.isNotEmpty(res.body.data.message);
    const expected = await res.body.data.message;
    assert.equal(actual, expected);
  });

  it("GET /company/branches success", async () => {
    const res = await agent(app)
      .get("/company/branches")
      .set("Authorization", authToken)
      .expect(200);
    assert.isNotEmpty(res.body.data);
    branchIdentifier = res.body.data[0].uuid;
  });

  it("UPDATE /company/update-branch success", async () => {
    const actual = "1 record modified";
    const branch = TestCompanyGenerator.createBranch();
    branch.name = "test update name";
    branch.uuid = branchIdentifier;

    const res = await agent(app)
      .put("/company/update-branch")
      .set("Authorization", authToken)
      .send(branch)
      .expect(200);
    assert.isNotEmpty(res.body.data.message);
    const expected = res.body.data.message;
    assert.equal(actual, expected);
  });

  it("GET /company/branch/:identifier success", async () => {
    const res = await agent(app)
      .get(`/company/branch/${branchIdentifier}`)
      .set("Authorization", authToken)
      .expect(200);
    assert.isNotEmpty(res.body.data);
  });

  it("DELETE /company/delete-company/:identifier success", async () => {
    const actual = "1 record removed";
    const res = await agent(app)
      .delete(`/company/delete-company/${companyIdentifier}`)
      .set("Authorization", authToken)
      .expect(200);
    assert.isNotEmpty(res.body.data);
    const expected = res.body.data.message;
    assert.equal(actual, expected);
  });

  it("DELETE /company/delete-branch/:identifier success", async () => {
    const actual = "1 record removed";
    const res = await agent(app)
      .delete(`/company/delete-branch/${branchIdentifier}`)
      .set("Authorization", authToken)
      .expect(200);
    assert.isNotEmpty(res.body.data);
    const expected = res.body.data.message;
    assert.equal(actual, expected);
  });
});

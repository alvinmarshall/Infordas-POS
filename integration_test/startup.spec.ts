import { TestUserGeneratorTest } from "../unit_test/utils/TestUserGenerator";

import { agent as request } from "supertest";

import app from "../src";

import { expect } from "chai";


before(async () => {
  const admin = TestUserGeneratorTest.admin();
  let res = await request(app)
    .post("/users/admin/register")
    .send(admin);
  expect(res.status).to.be.equal(201);
});



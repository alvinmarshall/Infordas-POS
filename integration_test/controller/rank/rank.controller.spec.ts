import { agent } from "supertest";
import app from "../../../src";
import { TestUserGeneratorTest } from "../../../unit_test/utils/TestUserGenerator";
import { ICredentials } from "../../../src/core/domain/entity/user/IAuthenticationParams";
import { expect, assert } from "chai";
import { TestRankGenerator } from "../../../unit_test/utils/TestRankGenerator";

describe("controller.rank RankController Test", () => {
  let authToken: string;
  let rankIdentifier: string;

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

  it("POST /rank/create-rank", async () => {
    const actual = "1 Rank added";
    const rank = TestRankGenerator.create();
    const res = await agent(app)
      .post("/rank/create-rank")
      .set("Authorization", authToken)
      .send(rank)
      .expect(201);
    assert.isNotEmpty(res.body.data.message);
    const expected = res.body.data.message;
    assert.equal(actual, expected);
  });

  it("GET /rank", async () => {
    const res = await agent(app)
      .get("/rank")
      .set("Authorization", authToken)
      .expect(200);
    assert.isNotEmpty(res.body.data);
    rankIdentifier = res.body.data[1].id;
    // console.log("resp", res.body);
  });

  it("GET /rank/:identifier", async () => {
    const res = await agent(app)
      .get(`/rank/${rankIdentifier}`)
      .set("Authorization", authToken)
      .expect(200);
    assert.isNotEmpty(res.body.data);
    // console.log("resp", res.body);
  });

  it("UPDATE /rank/update-rank", async () => {
    const actual = "1 record modified";
    const rank = TestRankGenerator.create();
    rank.position = "test update position";
    rank.id = rankIdentifier;
    const res = await agent(app)
      .put(`/rank/update-rank`)
      .set("Authorization", authToken)
      .send(rank)
      .expect(200);
    assert.isNotEmpty(res.body.data.message);
    const expected = res.body.data.message;
    assert.equal(actual, expected);
  });

  it("DELETE /rank/delete-rank/:identifier", async () => {
    const actual = "1 record removed";
    const res = await agent(app)
      .delete(`/rank/delete-rank/${rankIdentifier}`)
      .set("Authorization", authToken)
      .expect(200);
    assert.isNotEmpty(res.body.data.message);
    const expected = res.body.data.message;
    assert.equal(actual, expected);
    // console.log("resp", res.body);
  });
});

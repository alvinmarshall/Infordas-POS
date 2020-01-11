import "reflect-metadata";
import app from "../../../src";
import { agent as request } from "supertest";
import { expect } from "chai";
import { ICredentials } from "../../../src/core/domain/entity/user/IAuthenticationParams";
import { TestUserGeneratorTest } from "../../../unit_test/utils/TestUserGenerator";

describe("controller.user UserController Test", () => {
  let authToken: string;

  before(async () => {
    const { username, password } = TestUserGeneratorTest.admin();
    const body: ICredentials = { username, password };
    body.username = `admin_${username}`;
    const res = await request(app)
      .post("/users/login")
      .send(body);
    expect(res.status).to.be.equal(200);
    const { token } = res.body.data;
    authToken = `Bearer ${token}`;
  });

  it("POST /users/admin/register", async () => {
    const admin = TestUserGeneratorTest.admin();
    admin.username = "test_username2";
    admin.adminRef = admin.uuid; //note uuid is auto-generated
    const res = await request(app)
      .post("/users/admin/register")
      .send(admin);
    expect(res.status).to.be.equal(403); //hence 403
    // console.log("response", res.body);
  });

  it("POST /users/login Admin login", async () => {
    const { username, password } = TestUserGeneratorTest.admin();
    let body: ICredentials = { username, password };
    body.username = `admin_${username}`;
    const res = await request(app)
      .post("/users/login")
      .send(body);
    expect(res.status).to.be.equal(200);
    expect(res.body.data).to.be.an("Object");
  });

  it("Login with bad credentials failed", async () => {
    const message = "Invalid credentials";
    const body: ICredentials = { username: "unknown", password: "unknown" };
    const res = await request(app)
      .post("/users/login")
      .send(body);
    expect(res.status).to.be.equal(401);
    expect(res.body.message).to.be.equal(message);
    // console.log("status",res.body)
  });

  it("Register new admin with no admin right", async () => {
    const message = "You need an administrator right to create this account";
    const admin = TestUserGeneratorTest.admin();
    admin.username = "test admin 2";
    const res = await request(app)
      .post("/users/admin/register")
      .send(admin);
    expect(res.status).to.be.equal(403);
    expect(res.body.data.message).to.be.equal(message);
    // console.log("response", res.body);
  });

  it("POST /users/register", async () => {
    const user = TestUserGeneratorTest.createUser();
    const res = await request(app)
      .post("/users/register")
      .set("Authorization", authToken)
      .send(user)
      .expect(201);
    // console.log("create-user", res.body);
  });

  it("Login user with correct credentials success", async () => {
    const { username, password } = TestUserGeneratorTest.createUser();
    const body: ICredentials = { username, password };
    const res = await request(app)
      .post("/users/login")
      .send(body);
    expect(res.status).to.be.equal(200);
    expect(res.body.data).to.be.an("Object");
  });

  it("GET /users/counts", async () => {
    const res = await request(app)
      .get("/users/counts")
      .set("Authorization", authToken);
    expect(res.status).to.be.equal(200);
  });

  it("Returns status 500 for bad params success", async () => {
    const res = await request(app)
      .post("/users/register")
      .send({ password: "" })
      .set("Authorization", authToken);
    expect(res.status).to.be.equal(500);
  });

  it("GET /users/admin/status success", async () => {
    const res = await request(app)
      .get("/users/admin/status")
    expect(res.status).to.be.equal(200);
    expect(res.body.data).to.be.equal(true)
  });
});

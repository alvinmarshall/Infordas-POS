import "reflect-metadata";
import app from "../../src";
import { agent as request } from "supertest";
import { expect } from "chai";
import { ICredentials } from "../../src/core/domain/entity/user/IAuthenticationParams";
import { TestUserGeneratorTest } from "../utils/TestUserGenerator";
import DIContainer from "../../src/app/loc/di.container";
import { UserDaoImpl } from "../../src/core/data/source/db/dao/user/UserDaoImpl";

describe("controller.User test", () => {
  const context = DIContainer.resolve<UserDaoImpl>(UserDaoImpl);
  let authToken: string;

  before(async () => {
    const admin = TestUserGeneratorTest.admin();
    let res = await request(app)
      .post("/users/admin/register")
      .send(admin);
    expect(res.status).to.be.equal(201);

    const { username, password } = TestUserGeneratorTest.admin();
    const body: ICredentials = { username, password };
    body.username = `admin_${username}`;
    res = await request(app)
      .post("/users/login")
      .send(body);
    expect(res.status).to.be.equal(200);
    const { token } = res.body.data;
    authToken = `Bearer ${token}`;
  });

  it("Register new admin", async () => {
    const admin = TestUserGeneratorTest.admin();
    admin.username = "test_username2";
    admin.adminRef = admin.uuid;
    const res = await request(app)
      .post("/users/admin/register")
      .send(admin);
    expect(res.status).to.be.equal(201);
    // console.log("response", res.body);
  });

  it("Login admin with correct credentials success", async () => {
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

  it("Create a new user account success", async () => {
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

  it("Get user count success", async () => {
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

  after(async () => {
    await context.db.query(TestUserGeneratorTest.resetAdminTableSql(), []);
    await context.db.query(TestUserGeneratorTest.resetUserTableSql(), []);
    await context.db.query(TestUserGeneratorTest.resetRankTableSql(), []);
  });
});

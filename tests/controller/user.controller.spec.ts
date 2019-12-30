import app from "../../src";
import { agent as request } from "supertest";
import { expect } from "chai";
import { ICredentials } from "../../src/core/domain/entity/user/IAuthenticationParams";
import { TestUserGeneratorTest } from "../utils/TestUserGenerator";

describe("controller.User test", () => {
  it("Login user with correct credentials success", async () => {
    try {
      const body: ICredentials = { username: "owusu", password: "1234" };
      const res = await request(app)
        .post("/users/login")
        .send(body);
      expect(res.status).to.be.equal(200);
      expect(res.body.data).to.be.an("Object");
    } catch (error) {
      console.error(error);
    }
  });

  it("Login with bad credentials failed", async () => {
    try {
      const message = "Invalid credentials";
      const body: ICredentials = { username: "unknown", password: "unknown" };
      const res = await request(app)
        .post("/users/login")
        .send(body);
      expect(res.status).to.be.equal(401);
      expect(res.body.message).to.be.equal(message);
      // console.log("status",res.body)
    } catch (error) {
      console.error(error);
    }
  });

  it("Register new admin", async () => {
    const admin = TestUserGeneratorTest.admin();
    admin.adminRef = admin.uuid;
    const res = await request(app)
      .post("/users/admin/register")
      .send(admin);
    console.log("response", res.body);
  });

  it("Register new admin with no admin right", async () => {
    const message = "You need an administrator right to create this account";
    const admin = TestUserGeneratorTest.admin();
    admin.username = "test admin 2"
    const res = await request(app)
      .post("/users/admin/register")
      .send(admin);
    expect(res.status).to.be.equal(403);
    expect(res.body.data.message).to.be.equal(message);
    console.log("response", res.body);
  });
});

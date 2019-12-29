import app from "../../src";
import { agent as request } from "supertest";
import { expect } from "chai";
import { ICredentials } from "../../src/core/domain/entity/user/IAuthenticationParams";

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
});

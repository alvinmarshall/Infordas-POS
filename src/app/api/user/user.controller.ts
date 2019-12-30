/*
 *  This is the default license template.
 *
 *  File: user.controller.ts
 *  Author: Bik_krl
 *  Copyright (c) 2019 Bik_krl
 *
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

import { UserService } from "./user.service";
import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { IUser } from "../../../core/domain/entity/user/IUser";
import bcryptjs, { hash } from "bcryptjs";
import { ICredentials } from "../../../core/domain/entity/user/IAuthenticationParams";
import { IAdmin } from "../../../core/domain/entity/user/IAdmin";

@injectable()
export class UserController {
  private userService: UserService;

  constructor(@inject(UserService) $userService: UserService) {
    this.userService = $userService;
  }

  async getAuthenticateUser(req: Request, res: Response) {
    try {
      const body: ICredentials = req.body;
      const data = await this.userService.authenticateUser(body);
      if (data === null)
        return res
          .status(401)
          .send({ message: "Invalid credentials", status: 401 });
      return res.send({ data, status: 200 });
    } catch (e) {
      return res
        .status(500)
        .send({ message: "something went wrong try again" });
    }
  }

  async createUserAccount(req: Request, res: Response) {
    try {
      const body: IUser = req.body;
      console.log(body);
      if (body.password != undefined) {
        let password = body.password;
        const salt = await bcryptjs.genSalt(10);
        const hash = await bcryptjs.hash(password, salt);
        body.password = hash;
        const data = await this.userService.createUser(body);
        return res.status(201).send({ data, status: 201 });
      }
      return res
        .status(400)
        .send({ message: "password can't be empty", status: 400 });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "Internal error occurred", status: 500 });
    }
  }

  async getUsersCount(req: Request, res: Response) {
    try {
      const data = await this.userService.getUsers();
      const count = data.length;
      return res.send({ count, status: 200 });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "Internal error occurred", status: 500 });
    }
  }

  async createAdminAccount(req: Request, res: Response) {
    try {
      const body: IAdmin = req.body;
      body.username = `admin_${body.username}`;
      if (body.password != undefined) {
        let password = body.password;
        const salt = await bcryptjs.genSalt(10);
        const hash = await bcryptjs.hash(password, salt);
        body.password = hash;
        const data = await this.userService.createAdmin(body);
        const { message } = data;
        if (message.includes("administrator right")) {
          return res.status(403).send({ data, status: 403 });
        }
        return res.status(201).send({ data, status: 201 });
      }
      return res
        .status(400)
        .send({ message: "password can't be empty", status: 400 });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "Internal error occurred", status: 500 });
    }
  }
}

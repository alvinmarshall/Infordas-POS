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
import { LoginData } from "../../model/LoginData";

@injectable()
export class UserController {
  private userService: UserService;

  constructor(@inject(UserService) $userService: UserService) {
    this.userService = $userService;
  }

  async getAuthenticateUser(req: Request, res: Response) {
    try {
      const {
        uuid,
        name,
        token,
        rank,
        username
      } = await this.userService.authenticateUser({
        username: "owusu",
        password: "1234"
      });
      const data: LoginData = {
        message: "Login successful",
        uuid,
        name,
        rank,
        username,
        token
      };
      return res.send({ data, status: 200 });
    } catch (e) {
      console.error(e);
      if (e.syscall == "connect") {
        return res.status(500).send({ message: "Server is offline" });
      }
      return res
        .status(500)
        .send({ message: "something went wrong try again" });
    }
  }

  async createUserAccount(req: Request, res: Response) {
    try {
      const message = await this.userService.createUser({
        id: 0,
        username: "owusu",
        password: "1234",
        contactNo: "01222323",
        name: "Owusu Georgina",
        rank: 2,
        uuid: "2b48d086-14a8-421e-a4b8-29e96c08a139"
      });
      return res.status(201).send({
        message,
        status: 201,
        tillNo: "2b48d086-14a8-421e-a4b8-29e96c08a139"
      });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "something went wrong, try again" });
    }
  }
}

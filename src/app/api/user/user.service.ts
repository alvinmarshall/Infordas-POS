/*
 *  This is the default license template.
 *
 *  File: user.service.ts
 *  Author: Bik_krl
 *  Copyright (c) 2019 Bik_krl
 *
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

import { GetAuthenticationTask } from "../../../core/domain/useCase/user/GetAuthenticationTask";
import { ICredentials } from "../../../core/domain/entity/user/IAuthenticationParams";
import { injectable, inject } from "inversify";
import { IUser } from "../../../core/domain/entity/user/IUser";
import { AddAUserTask } from "../../../core/domain/useCase/user/AddAUserTask";
import { JWTTokenService } from "../auth/JWTTokenService";
import bcryptjs from "bcryptjs";
import { GetUsersTask } from "../../../core/domain/useCase/user/GetUsersTask";

/**
 * UserService class
 */
@injectable()
export class UserService {
  private getAuthenticationTask: GetAuthenticationTask;
  private addAUserTask: AddAUserTask;
  private getUsersTask: GetUsersTask;
  private jwtService: JWTTokenService;

  /**
   *
   * @param $getAuthenticationTask provide GetAuthenticationTask instance
   * @param $addAUserTask
   * @param $getUserWithIdentifierTask
   */
  constructor(
    @inject(GetAuthenticationTask)
    $getAuthenticationTask: GetAuthenticationTask,
    @inject(AddAUserTask) $addAUserTask: AddAUserTask,
    @inject(GetUsersTask)
    $getUsersTask: GetUsersTask,
    @inject(JWTTokenService) $jwtService: JWTTokenService
  ) {
    this.getAuthenticationTask = $getAuthenticationTask;
    this.addAUserTask = $addAUserTask;
    this.getUsersTask = $getUsersTask;
    this.jwtService = $jwtService;
  }

  authenticateUser(credentials: ICredentials): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await this.getAuthenticationTask.buildUseCase(credentials);
        if (!data) return resolve(null);
        const isValidPass = await bcryptjs.compare(
          credentials.password,
          data.password
        );
        if (!isValidPass) return resolve(null);
        const token = this.jwtService.generateToken(data);
        const { name, rank } = data;
        resolve({ name, token, rank: rank });
      } catch (error) {
        reject(error);
      }
    });
  }

  createUser(user: IUser): Promise<any> {
    return this.addAUserTask.buildUseCase(user);
  }

  getUserWithIdentifier(identifier: string): Promise<IUser> {
    return this.getUsersTask.buildUseCase(identifier).then(data => data[0]);
  }

  getUsers(): Promise<IUser[]> {
    return this.getUsersTask.buildUseCase();
  }
}

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
import { AccessTask } from "../../../core/domain/useCase/access/AccessTask";
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
  private accessTask: AccessTask;

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
    @inject(JWTTokenService) $jwtService: JWTTokenService,
    @inject(AccessTask) $accessTask: AccessTask
  ) {
    this.getAuthenticationTask = $getAuthenticationTask;
    this.addAUserTask = $addAUserTask;
    this.getUsersTask = $getUsersTask;
    this.jwtService = $jwtService;
    this.accessTask = $accessTask;
  }

  authenticateUser(credentials: ICredentials): Promise<any> {
    return this.getAuthenticationTask.buildUseCase(credentials).then(data => {
      if (!data.uuid) return null;
      const isValidPass = bcryptjs.compareSync(
        credentials.password,
        data.password
      );
      if (!isValidPass) return null;
      const token = this.jwtService.generateToken(data);
      this.accessTask.buildUseCase({
        uuid: data.uuid,
        token,
        startTime: new Date().getTime().toString()
      });
      return {
        name: data.name,
        token,
        rank: data.rank
      };
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

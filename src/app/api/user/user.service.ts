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
import { GetUserWithIdentifierTask } from "../../../core/domain/useCase/user/GetUserWithIdentifierTask";
import { UserEntity } from "../../../core/domain/entity/user/UserEntity";
import { JWTTokenService } from "../auth/jwtToken-config";
import { LoginData } from "../../model/LoginData";
import { AccessTask } from "../../../core/domain/useCase/access/AccessTask";

/**
 * UserService class
 */
@injectable()
export class UserService {
  private getAuthenticationTask: GetAuthenticationTask;
  private addAUserTask: AddAUserTask;
  private getUserWithIdentifierTask: GetUserWithIdentifierTask;
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
    @inject(GetUserWithIdentifierTask)
    $getUserWithIdentifierTask: GetUserWithIdentifierTask,
    @inject(JWTTokenService) $jwtService: JWTTokenService,
    @inject(AccessTask) $accessTask: AccessTask
  ) {
    this.getAuthenticationTask = $getAuthenticationTask;
    this.addAUserTask = $addAUserTask;
    this.getUserWithIdentifierTask = $getUserWithIdentifierTask;
    this.jwtService = $jwtService;
    this.accessTask = $accessTask;
  }

  authenticateUser(credentials: ICredentials): Promise<any> {
    return this.getAuthenticationTask.buildUseCase(credentials).then(data => {
      const token = this.jwtService.generateToken(data);
      this.accessTask.buildUseCase({
        uuid: data.$uuid,
        token,
        startTime: new Date().getTime().toString()
      });
      return {
        uuid: data.$uuid,
        name: data.$name,
        username: data.$username,
        token,
        rank: data.$rank
      };
    });
  }

  createUser(user: IUser): Promise<any> {
    return this.addAUserTask.buildUseCase(user);
  }

  getUserWithIdentifier(identifier: string): Promise<UserEntity> {
    return this.getUserWithIdentifierTask.buildUseCase(identifier);
  }
}

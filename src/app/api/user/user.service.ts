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
import { AddAdminTask } from "../../../core/domain/useCase/user/AddAdminTask";
import { IAdmin } from "../../../core/domain/entity/user/IAdmin";
import { GetAdminTask } from "../../../core/domain/useCase/user/GetAdminTask";
import { CheckForAdminTask } from "../../../core/domain/useCase/user/CheckForAdminTask";

/**
 * UserService class
 */
@injectable()
export class UserService {
  private getAuthenticationTask: GetAuthenticationTask;
  private addAUserTask: AddAUserTask;
  private getUsersTask: GetUsersTask;
  private jwtService: JWTTokenService;
  private addAdminTask: AddAdminTask;
  private getAdminTask: GetAdminTask;
  private checkAdminTask: CheckForAdminTask;

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
    @inject(AddAdminTask) $addAdminTask: AddAdminTask,
    @inject(GetAdminTask) $getAdminTask: GetAdminTask,
    @inject(CheckForAdminTask) $checkForAdmin: CheckForAdminTask
  ) {
    this.getAuthenticationTask = $getAuthenticationTask;
    this.addAUserTask = $addAUserTask;
    this.getUsersTask = $getUsersTask;
    this.jwtService = $jwtService;
    this.addAdminTask = $addAdminTask;
    this.getAdminTask = $getAdminTask;
    this.checkAdminTask = $checkForAdmin;
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
  createAdmin(admin: IAdmin): Promise<any> {
    return this.addAdminTask.buildUseCase(admin);
  }
  getAdminWithIdentifier(identifier: string): Promise<IUser> {
    return this.getAdminTask.buildUseCase(identifier).then(data => data[0]);
  }
  checkForAdmin(): Promise<boolean> {
    return this.checkAdminTask.buildUseCase();
  }
}

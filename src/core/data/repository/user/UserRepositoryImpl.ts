// Copyright 2019 Bik_krl
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { injectable, inject } from "inversify";
import { RemoteDataSource } from "./../../RemoteDataSource";
import { UserRepository } from "./../../../domain/repository/UserRepository";
import { UserEntity } from "../../../domain/entity/user/UserEntity";
import { RemoteDataSourceImpl } from "../../../remote-source/source/RemoteDataSourceImpl";
import { IUser } from "../../../domain/entity/user/IUser";
import { IAccess } from "../../../domain/entity/access/IAccess";

@injectable()
export class UserRepositoryImpl implements UserRepository {
  private remoteDataSource: RemoteDataSource;

  constructor(
    @inject(RemoteDataSourceImpl) $remoteDataSource: RemoteDataSource
  ) {
    this.remoteDataSource = $remoteDataSource;
  }

  getUserWithCredentials(
    username: string,
    password: string
  ): Promise<UserEntity> {
    return this.remoteDataSource.getUserWithCredentials(username, password);
  }

  addAUser(user: IUser): Promise<any> {
    return this.remoteDataSource.addNewUser(user);
  }
  setUserAccess(access: IAccess): Promise<any> {
    return this.remoteDataSource.setUserAccess(access);
  }
  getUserWithIdentifier(identifier: string): Promise<UserEntity> {
    return this.remoteDataSource.getUserWithIdentifier(identifier);
  }
}

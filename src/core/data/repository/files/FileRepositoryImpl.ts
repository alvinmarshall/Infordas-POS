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

import { FileRepository } from "../../../domain/repository/FileRepository";
import { injectable, inject } from "inversify";
import { IFile } from "../../../domain/entity/files/IFile";
import { RemoteDataSource } from "../../source/remote-source/RemoteDataSource";
import { RemoteDataSourceImpl } from "../../source/remote-source/RemoteDataSourceImpl";

/**
 * FileRepositoryImpl
 * class implement FileRepository {@Link ../../../domain/repository/FileRepository}
 */
@injectable()
export class FileRepositoryImpl implements FileRepository {
  private remoteDataSource: RemoteDataSource;

  /**
   * @constructor
   * @param $remoteSource requires RemoteDataSource instance
   */
  constructor(
    @inject(RemoteDataSourceImpl) $remoteDataSource: RemoteDataSource
  ) {
    this.remoteDataSource = $remoteDataSource;
  }

  saveFile(file: IFile): Promise<any> {
    return this.remoteDataSource.saveFile(file);
  }
}

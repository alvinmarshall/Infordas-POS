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

import path from "path";
import { Request, Response } from "express";
import { FileService } from "./file.service";
import { FileUtils } from "./FileUtils";
import { inject, injectable } from "inversify";
import { IFile } from "../../../core/domain/entity/files/IFile";

/**
 * FileController
 */
@injectable()
export class FileController {
  private fileService: FileService;
  private fileUtil: FileUtils;

  /**
   * @constructor
   * @param $fileService require FileService instance
   * @param $fileUtil require FileUtils instance
   */
  constructor(
    @inject(FileService) $fileService: FileService,
    @inject(FileUtils) $fileUtil: FileUtils
  ) {
    this.fileService = $fileService;
    this.fileUtil = $fileUtil;
  }

  async uploadFiles(req: Request, res: Response) {
    try {
      this.fileUtil.$req = req;
      const { identifier } = req.body;
      const fileInfo = await this.fileUtil.uploadFileStatus();
      const save_file: IFile = {
        identifier,
        type: fileInfo
      };
      const data = await this.fileService.saveFilePath(save_file);
      return res.send({ data, status: 200 });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Internal error occurred", status: 500 });
    }
  }

  downloadFile(req: Request, res: Response) {
    const fileUrl = req.query.url;
    let filename = path.basename(fileUrl);
    res.download(fileUrl, filename, err => {
      if (err) {
        console.error(err);
        res.status(404).send({ message: "File not found", status: 404 });
      }
      return;
    });
  }
}

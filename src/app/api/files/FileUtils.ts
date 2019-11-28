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

import { FILE_TYPE } from "../../../common/constants";
import { Request } from "express";
import uploadUtils from "./upload-file";
import { IFileType } from "../../model/IFileType";
import { injectable } from "inversify";

@injectable()
export class FileUtils {
  private req!: Request;


    /**
     * Getter $req
     * @return {Request}
     */
	public get $req(): Request {
		return this.req;
	}

    /**
     * Setter $req
     * @param {Request} value
     */
	public set $req(value: Request) {
		this.req = value;
	}
  

  getFileUploadInfo() {
    const { type } = this.req.body;
    const fileType = FILE_TYPE.filter(data => {
      return data.name == type;
    });
    return fileType[0];
  }

  uploadFileStatus(): Promise<IFileType> {
    const fileType = this.getFileUploadInfo();
    return new Promise((resolve, reject) => {
      uploadUtils(this.req.files, fileType, (err: any, result: IFileType) => {
        if (err) {
          return reject(err);
        }
        return resolve(result);
      });
    });
  }
}

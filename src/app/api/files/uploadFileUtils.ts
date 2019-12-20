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

import fs from "fs";
import { IFileType } from "../../model/IFileType";

const uploadFileUtils = ($file: any, $fileType: IFileType) => {
  return new Promise<IFileType>((resolve, reject) => {
    const _fileType = $fileType;
    if (Object.keys($file.file).length == 0) {
      return reject(new Error("file key not found"));
    }
    const _file = $file.file;
    const path = `${_fileType.location}/${_file.name}`;
    _file.mv(path, (err: any) => {
      if (err) {
        return reject(err);
      }
      _fileType.saveFilePath = path;
      fs.chmodSync(path, "0707");
      return resolve(_fileType);
    });
  });
};

export default uploadFileUtils;

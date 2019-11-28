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
/**
 * uploadFileUtil
 * @param {*} $file requires express-file
 * @param {*} $fileType requires FileType
 * @param {*} cb callback function
 */
const uploadFileUtil = ($file, $fileType, cb = (err, fileType) => {}) => {
  const _fileType = $fileType;
  if (Object.keys($file.file).length == 0) {
    cb(new Error("file key not found"), null);
    return;
  }

  const _file = $file.file;
  const path = `${_fileType.location}/${_file.name}`;
  _file.mv(path, err => {
    if (err) {
      return cb(err);
    }
    _fileType.saveFilePath = path;
    fs.chmodSync(path,'0707')
    return cb(null, _fileType);
  });
};

export default uploadFileUtil;

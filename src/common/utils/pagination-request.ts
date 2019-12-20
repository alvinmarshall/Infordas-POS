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

export const paginateRequest = (req: any, res: any, model: any[]) => {
  return new Promise((resolve, reject) => {
    let result: any = {};
    let page: number = parseInt(req.query.page || 0);
    let limit: number = parseInt(req.query.limit || 0);
    let startIndex = (page - 1) * limit;
    let endIndex = page * limit;

    if (page === 0 && limit === 0) {
      result.data = model;
      return resolve(result);
    }
    if (endIndex < model.length) {
      result.next = {
        page: page + 1,
        limit: limit
      };
    }

    if (startIndex > 0) {
      result.prev = {
        page: page - 1,
        limit: limit
      };
    }
    result.data = model.slice(startIndex, endIndex);
    resolve(result);
  });
};

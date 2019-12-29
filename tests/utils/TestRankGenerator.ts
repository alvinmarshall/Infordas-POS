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

import { IRank } from "../../src/core/domain/entity/rank/IRank";
/**
 * TestRankGenerator class
 */
export class TestRankGenerator {
  static create(): IRank {
    return { id: 0, position: "test position" };
  }

  static getRanks(): IRank {
    return { id: 1, position: "test position" };
  }

  static getRankList(): IRank[] {
    return [
      {
        id: 1,
        position: "test position"
      },
      {
        id: 2,
        position: "test position"
      }
    ];
  }

  static getRank(): IRank[] {
    return [
      {
        id: 1,
        position: "test position"
      }
    ];
  }
}

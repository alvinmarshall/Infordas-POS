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

import { IRank } from "./IRank";
/**
 * RankEntity class
 */
export class RankEntity {
  private id: number;
  private position: string;

  /**
   * @constructor
   * @param $rank type IRank
   */
  constructor($rank?: IRank) {
    this.id = ($rank && $rank.id) || 0;
    this.position = ($rank && $rank.position) || "";
  }

  /**
   * Getter $position
   * @return {string}
   */
  public get $position(): string {
    return this.position;
  }

  /**
   * Setter $position
   * @param {string} value
   */
  public set $position(value: string) {
    this.position = value;
  }

  /**
   * Getter $id
   * @return {number}
   */
  public get $id(): number {
    return this.id;
  }

  /**
   * Setter $id
   * @param {number} value
   */
  public set $id(value: number) {
    this.id = value;
  }
}

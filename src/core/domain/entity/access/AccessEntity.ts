
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

import { IAccess } from "./IAccess";

/**
 * AccessEntity
 */
export class AccessEntity {
  private id: number;
  private uuid: string;
  private token: string;
  private startTime: string;
  private endTime: string;

  /**
   * @constructor
   * @param access require IAccess || null
   */
  constructor(access?: IAccess) {
    this.id = (access && access.id) || 0;
    this.uuid = (access && access.uuid) || "";
    this.token = (access && access.token) || "";
    this.startTime = (access && access.startTime) || "";
    this.endTime = (access && access.endTime) || "";
  }

  /**
   * Getter $endTime
   * @return {string}
   */
  public get $endTime(): string {
    return this.endTime;
  }

  /**
   * Setter $endTime
   * @param {string} value
   */
  public set $endTime(value: string) {
    this.endTime = value;
  }

  /**
   * Getter $startTime
   * @return {string}
   */
  public get $startTime(): string {
    return this.startTime;
  }

  /**
   * Setter $startTime
   * @param {string} value
   */
  public set $startTime(value: string) {
    this.startTime = value;
  }

  /**
   * Getter $token
   * @return {string}
   */
  public get $token(): string {
    return this.token;
  }

  /**
   * Setter $token
   * @param {string} value
   */
  public set $token(value: string) {
    this.token = value;
  }

  /**
   * Getter $uuid
   * @return {string}
   */
  public get $uuid(): string {
    return this.uuid;
  }

  /**
   * Setter $uuid
   * @param {string} value
   */
  public set $uuid(value: string) {
    this.uuid = value;
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

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

import { IUser } from "./IUser";

/**
 * User Entity class
 */
export class UserEntity {
  private id: number;
  private name: string;
  private contactNo: string;
  private uuid: string;
  private username: string;
  private password: string;
  private rank: number;

  constructor(user?: IUser) {
    this.id = (user && user.id) || 0;
    this.name = (user && user.name) || "";
    this.contactNo = (user && user.contactNo) || "";
    this.uuid = (user && user.uuid) || "";
    this.username = (user && user.username) || "";
    this.password = (user && user.password) || "";
    this.rank = (user && user.rank) || 0;
  }

  /**
   * Getter $rank
   * @return {number}
   */
  public get $rank(): number {
    return this.rank;
  }

  /**
   * Setter $rank
   * @param {number} value
   */
  public set $rank(value: number) {
    this.rank = value;
  }

  /**
   * Getter $password
   * @return {string}
   */
  public get $password(): string {
    return this.password;
  }

  /**
   * Setter $password
   * @param {string} value
   */
  public set $password(value: string) {
    this.password = value;
  }

  /**
   * Getter $username
   * @return {string}
   */
  public get $username(): string {
    return this.username;
  }

  /**
   * Setter $username
   * @param {string} value
   */
  public set $username(value: string) {
    this.username = value;
  }

  /**
   * Getter $tillNo
   * @return {string}
   */
  public get $uuid(): string {
    return this.uuid;
  }

  /**
   * Setter $tillNo
   * @param {string} value
   */
  public set $uuid(value: string) {
    this.uuid = value;
  }

  /**
   * Getter $contactNo
   * @return {string}
   */
  public get $contactNo(): string {
    return this.contactNo;
  }

  /**
   * Setter $contactNo
   * @param {string} value
   */
  public set $contactNo(value: string) {
    this.contactNo = value;
  }

  /**
   * Getter $fullName
   * @return {string}
   */
  public get $name(): string {
    return this.name;
  }

  /**
   * Setter $fullName
   * @param {string} value
   */
  public set $name(value: string) {
    this.name = value;
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

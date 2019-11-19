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

import { IBranch } from "./IBranch";
export class BranchEntity {
  private id: number;
  private uuid: string;
  private compId: number;
  private empId: string;
  private name: string;
  private location: string;
  private contactNo: string;
  private email: string;
  private website: string;
  private address: string;

  constructor(branch?: IBranch) {
    this.id = (branch && branch.id) || 0;
    this.uuid = (branch && branch.uuid) || "";
    this.compId = (branch && branch.compId) || 0;
    this.empId = (branch && branch.empId) || "";
    this.name = (branch && branch.name) || "";
    this.location = (branch && branch.location) || "";
    this.contactNo = (branch && branch.contactNo) || "";
    this.email = (branch && branch.email) || "";
    this.website = (branch && branch.website) || "";
    this.address = (branch && branch.address) || "";
  }


    /**
     * Getter $address
     * @return {string}
     */
	public get $address(): string {
		return this.address;
	}

    /**
     * Setter $address
     * @param {string} value
     */
	public set $address(value: string) {
		this.address = value;
	}


  /**
   * Getter $website
   * @return {string}
   */
  public get $website(): string {
    return this.website;
  }

  /**
   * Setter $website
   * @param {string} value
   */
  public set $website(value: string) {
    this.website = value;
  }

  /**
   * Getter $email
   * @return {string}
   */
  public get $email(): string {
    return this.email;
  }

  /**
   * Setter $email
   * @param {string} value
   */
  public set $email(value: string) {
    this.email = value;
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
   * Getter $location
   * @return {string}
   */
  public get $location(): string {
    return this.location;
  }

  /**
   * Setter $location
   * @param {string} value
   */
  public set $location(value: string) {
    this.location = value;
  }

  /**
   * Getter $name
   * @return {string}
   */
  public get $name(): string {
    return this.name;
  }

  /**
   * Setter $name
   * @param {string} value
   */
  public set $name(value: string) {
    this.name = value;
  }

  /**
   * Getter $empId
   * @return {string}
   */
  public get $empId(): string {
    return this.empId;
  }

  /**
   * Setter $empId
   * @param {string} value
   */
  public set $empId(value: string) {
    this.empId = value;
  }

  /**
   * Getter $compId
   * @return {number}
   */
  public get $compId(): number {
    return this.compId;
  }

  /**
   * Setter $compId
   * @param {number} value
   */
  public set $compId(value: number) {
    this.compId = value;
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

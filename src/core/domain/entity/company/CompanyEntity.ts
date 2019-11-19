import { ICompany } from "./ICompany";

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

/**
 * CompanyEntity class
 */
export class CompanyEntity {
  private id: number;
  private name: string;
  private location: string;
  private address: string;
  private contactNo: string;
  private email: string;
  private website: string;

  private constructor($company?: ICompany) {
    this.id = ($company && $company.id) || 0;
    this.name = ($company && $company.name) || "";
    this.location = ($company && $company.location) || "";
    this.address = ($company && $company.address) || "";
    this.contactNo = ($company && $company.contactNo) || "";
    this.email = ($company && $company.email) || "";
    this.website = ($company && $company.website) || "";
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

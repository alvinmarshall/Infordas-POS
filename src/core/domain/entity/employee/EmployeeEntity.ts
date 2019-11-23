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



import { IEmployee } from "./IEmployee";

/**
 * EmployeeEntity class
 * class implement IEmployee
 */
export class EmployeeEntity {
  id: number;
  empId: string;
  fullName: string;
  dob: string;
  status: number;
  gender: string;
  contact: string;
  email: string;
  address: string;

  constructor(employee?: IEmployee) {
    this.id = (employee && employee.id) || 0;
    this.empId = (employee && employee.empId) || "";
    this.fullName = (employee && employee.fullName) || "";
    this.dob = (employee && employee.dob) || "";
    this.status = (employee && employee.status) || 0;
    this.gender = (employee && employee.gender) || "";
    this.contact = (employee && employee.contact) || "";
    this.email = (employee && employee.email) || "";
    this.address = (employee && employee.address) || "";
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
  public get $contact(): string {
    return this.contact;
  }

  /**
   * Setter $contactNo
   * @param {string} value
   */
  public set $contact(value: string) {
    this.contact = value;
  }

  /**
   * Getter $gender
   * @return {string}
   */
  public get $gender(): string {
    return this.gender;
  }

  /**
   * Setter $gender
   * @param {string} value
   */
  public set $gender(value: string) {
    this.gender = value;
  }

  /**
   * Getter $status
   * @return {number}
   */
  public get $status(): number {
    return this.status;
  }

  /**
   * Setter $status
   * @param {string} value
   */
  public set $status(value: number) {
    this.status = value;
  }

  /**
   * Getter $dob
   * @return {string}
   */
  public get $dob(): string {
    return this.dob;
  }

  /**
   * Setter $dob
   * @param {string} value
   */
  public set $dob(value: string) {
    this.dob = value;
  }

  /**
   * Getter $fullName
   * @return {string}
   */
  public get $fullName(): string {
    return this.fullName;
  }

  /**
   * Setter $fullName
   * @param {string} value
   */
  public set $fullName(value: string) {
    this.fullName = value;
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

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

import { IEmployeeOther } from "./IEmployeeOther";

/**
 * EmployeeDetailEntity
 */
export class EmployeeDetailEntity {
  private uuid: string;
  private ssnId: string;
  private residence: string;
  private maritalStatus: string;
  private religion: string;
  private department: string;
  private division: string;
  private position: string;
  private category: string;
  private salary: string;
  private userGroup: string;
  private currency: string;
  private bank: string;
  private accountNo: string;
  private salaryStep: string;
  private rate: string;
  private rateType: string;
  private lastRate: string;
  private monthlyRate: string;
  private beginDate: string;
  private endDate: string;
  private applySSN: string;
  private applyTax: string;
  private applyPF: string;
  private children: string;
  private nextOfKin: string;
  private guarantor: string;
  private referenceBy: string;
  private relation: string;

  /**
   * @constructor
   * @param employeeDetail require IEmployeeOther || null
   */
  constructor(employeeDetail?: IEmployeeOther) {
    this.uuid = (employeeDetail && employeeDetail.uuid) || "";
    this.ssnId = (employeeDetail && employeeDetail.ssnId) || "";
    this.residence = (employeeDetail && employeeDetail.residence) || "";
    this.maritalStatus = (employeeDetail && employeeDetail.maritalStatus) || "";
    this.religion = (employeeDetail && employeeDetail.religion) || "";
    this.department = (employeeDetail && employeeDetail.department) || "";
    this.division = (employeeDetail && employeeDetail.division) || "";
    this.position = (employeeDetail && employeeDetail.position) || "";
    this.category = (employeeDetail && employeeDetail.category) || "";
    this.salary = (employeeDetail && employeeDetail.salary) || "";
    this.userGroup = (employeeDetail && employeeDetail.userGroup) || "";
    this.currency = (employeeDetail && employeeDetail.currency) || "";
    this.bank = (employeeDetail && employeeDetail.bank) || "";
    this.accountNo = (employeeDetail && employeeDetail.accountNo) || "";
    this.salaryStep = (employeeDetail && employeeDetail.salaryStep) || "";
    this.rate = (employeeDetail && employeeDetail.rate) || "";
    this.rateType = (employeeDetail && employeeDetail.rateType) || "";
    this.lastRate = (employeeDetail && employeeDetail.lastRate) || "";
    this.monthlyRate = (employeeDetail && employeeDetail.monthlyRate) || "";
    this.beginDate = (employeeDetail && employeeDetail.beginDate) || "";
    this.endDate = (employeeDetail && employeeDetail.endDate) || "";
    this.applySSN = (employeeDetail && employeeDetail.applySSN) || "";
    this.applyTax = (employeeDetail && employeeDetail.applyTax) || "";
    this.applyPF = (employeeDetail && employeeDetail.applyPF) || "";
    this.children = (employeeDetail && employeeDetail.children) || "";
    this.nextOfKin = (employeeDetail && employeeDetail.nextOfKin) || "";
    this.guarantor = (employeeDetail && employeeDetail.guarantor) || "";
    this.referenceBy = (employeeDetail && employeeDetail.referenceBy) || "";
    this.relation = (employeeDetail && employeeDetail.relation) || "";
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
   * Getter $children
   * @return {string}
   */
  public get $children(): string {
    return this.children;
  }

  /**
   * Setter $children
   * @param {string} value
   */
  public set $children(value: string) {
    this.children = value;
  }

  /**
   * Getter $relation
   * @return {string}
   */
  public get $relation(): string {
    return this.relation;
  }

  /**
   * Setter $relation
   * @param {string} value
   */
  public set $relation(value: string) {
    this.relation = value;
  }

  /**
   * Getter $referenceBy
   * @return {string}
   */
  public get $referenceBy(): string {
    return this.referenceBy;
  }

  /**
   * Setter $referenceBy
   * @param {string} value
   */
  public set $referenceBy(value: string) {
    this.referenceBy = value;
  }

  /**
   * Getter $guarantor
   * @return {string}
   */
  public get $guarantor(): string {
    return this.guarantor;
  }

  /**
   * Setter $guarantor
   * @param {string} value
   */
  public set $guarantor(value: string) {
    this.guarantor = value;
  }

  /**
   * Getter $nextOfKin
   * @return {string}
   */
  public get $nextOfKin(): string {
    return this.nextOfKin;
  }

  /**
   * Setter $nextOfKin
   * @param {string} value
   */
  public set $nextOfKin(value: string) {
    this.nextOfKin = value;
  }

  /**
   * Getter $applyPF
   * @return {string}
   */
  public get $applyPF(): string {
    return this.applyPF;
  }

  /**
   * Setter $applyPF
   * @param {string} value
   */
  public set $applyPF(value: string) {
    this.applyPF = value;
  }

  /**
   * Getter $applyTax
   * @return {string}
   */
  public get $applyTax(): string {
    return this.applyTax;
  }

  /**
   * Setter $applyTax
   * @param {string} value
   */
  public set $applyTax(value: string) {
    this.applyTax = value;
  }

  /**
   * Getter $applySSN
   * @return {string}
   */
  public get $applySSN(): string {
    return this.applySSN;
  }

  /**
   * Setter $applySSN
   * @param {string} value
   */
  public set $applySSN(value: string) {
    this.applySSN = value;
  }

  /**
   * Getter $endDate
   * @return {string}
   */
  public get $endDate(): string {
    return this.endDate;
  }

  /**
   * Setter $endDate
   * @param {string} value
   */
  public set $endDate(value: string) {
    this.endDate = value;
  }

  /**
   * Getter $beginDate
   * @return {string}
   */
  public get $beginDate(): string {
    return this.beginDate;
  }

  /**
   * Setter $beginDate
   * @param {string} value
   */
  public set $beginDate(value: string) {
    this.beginDate = value;
  }

  /**
   * Getter $monthlyRate
   * @return {string}
   */
  public get $monthlyRate(): string {
    return this.monthlyRate;
  }

  /**
   * Setter $monthlyRate
   * @param {string} value
   */
  public set $monthlyRate(value: string) {
    this.monthlyRate = value;
  }

  /**
   * Getter $lastRate
   * @return {string}
   */
  public get $lastRate(): string {
    return this.lastRate;
  }

  /**
   * Setter $lastRate
   * @param {string} value
   */
  public set $lastRate(value: string) {
    this.lastRate = value;
  }

  /**
   * Getter $rateType
   * @return {string}
   */
  public get $rateType(): string {
    return this.rateType;
  }

  /**
   * Setter $rateType
   * @param {string} value
   */
  public set $rateType(value: string) {
    this.rateType = value;
  }

  /**
   * Getter $rate
   * @return {string}
   */
  public get $rate(): string {
    return this.rate;
  }

  /**
   * Setter $rate
   * @param {string} value
   */
  public set $rate(value: string) {
    this.rate = value;
  }

  /**
   * Getter $salaryStep
   * @return {string}
   */
  public get $salaryStep(): string {
    return this.salaryStep;
  }

  /**
   * Setter $salaryStep
   * @param {string} value
   */
  public set $salaryStep(value: string) {
    this.salaryStep = value;
  }

  /**
   * Getter $accountNo
   * @return {string}
   */
  public get $accountNo(): string {
    return this.accountNo;
  }

  /**
   * Setter $accountNo
   * @param {string} value
   */
  public set $accountNo(value: string) {
    this.accountNo = value;
  }

  /**
   * Getter $bank
   * @return {string}
   */
  public get $bank(): string {
    return this.bank;
  }

  /**
   * Setter $bank
   * @param {string} value
   */
  public set $bank(value: string) {
    this.bank = value;
  }

  /**
   * Getter $currency
   * @return {string}
   */
  public get $currency(): string {
    return this.currency;
  }

  /**
   * Setter $currency
   * @param {string} value
   */
  public set $currency(value: string) {
    this.currency = value;
  }

  /**
   * Getter $userGroup
   * @return {string}
   */
  public get $userGroup(): string {
    return this.userGroup;
  }

  /**
   * Setter $userGroup
   * @param {string} value
   */
  public set $userGroup(value: string) {
    this.userGroup = value;
  }

  /**
   * Getter $salary
   * @return {string}
   */
  public get $salary(): string {
    return this.salary;
  }

  /**
   * Setter $salary
   * @param {string} value
   */
  public set $salary(value: string) {
    this.salary = value;
  }

  /**
   * Getter $category
   * @return {string}
   */
  public get $category(): string {
    return this.category;
  }

  /**
   * Setter $category
   * @param {string} value
   */
  public set $category(value: string) {
    this.category = value;
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
   * Getter $division
   * @return {string}
   */
  public get $division(): string {
    return this.division;
  }

  /**
   * Setter $division
   * @param {string} value
   */
  public set $division(value: string) {
    this.division = value;
  }

  /**
   * Getter $department
   * @return {string}
   */
  public get $department(): string {
    return this.department;
  }

  /**
   * Setter $department
   * @param {string} value
   */
  public set $department(value: string) {
    this.department = value;
  }

  /**
   * Getter $religion
   * @return {string}
   */
  public get $religion(): string {
    return this.religion;
  }

  /**
   * Setter $religion
   * @param {string} value
   */
  public set $religion(value: string) {
    this.religion = value;
  }

  /**
   * Getter $maritalStatus
   * @return {string}
   */
  public get $maritalStatus(): string {
    return this.maritalStatus;
  }

  /**
   * Setter $maritalStatus
   * @param {string} value
   */
  public set $maritalStatus(value: string) {
    this.maritalStatus = value;
  }

  /**
   * Getter $residence
   * @return {string}
   */
  public get $residence(): string {
    return this.residence;
  }

  /**
   * Setter $residence
   * @param {string} value
   */
  public set $residence(value: string) {
    this.residence = value;
  }

  /**
   * Getter $ssnId
   * @return {string}
   */
  public get $ssnId(): string {
    return this.ssnId;
  }

  /**
   * Setter $ssnId
   * @param {string} value
   */
  public set $ssnId(value: string) {
    this.ssnId = value;
  }
}

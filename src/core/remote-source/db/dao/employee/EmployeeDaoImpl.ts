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

import { EmployeeDao } from "./EmployeeDao";
import { IEmployee } from "../../../../domain/entity/employee/IEmployee";
import { MysqlDatabase } from "../../MysqlDatabase";
import { EMPLOYEE_TABLE } from "../../../../../common/constants";
import { injectable, inject } from "inversify";
import { IEmployeeOther } from "../../../../domain/entity/employee/IEmployeeOther";

/**
 * EmployeeDaoImpl class
 * class implement Employee {@Link ./EmployeeDao}
 */

@injectable()
export class EmployeeDaoImpl implements EmployeeDao {
  private db: MysqlDatabase;

  /**
   * @constructor
   * @param $db remote database instance required
   */
  constructor(@inject(MysqlDatabase) $db: MysqlDatabase) {
    this.db = $db;
  }

  getEmployees(): Promise<IEmployee[]> {
    let sql = `SELECT
      Emp_ID AS uuid,
      Name AS fullName,
      DOB AS dob,
      Status AS status,
      Gender AS gender,
      Contact AS contact,
      Email AS email,
      Address AS address
    FROM ${EMPLOYEE_TABLE}`;

    return this.db.query(sql, []);
  }
  getEmployeeWithIdentifier(identifier: string): Promise<IEmployee[]> {
    let sql = `SELECT
    Emp_ID AS uuid,
    Name AS fullName,
    DOB AS dob,
    Status AS status,
    Gender AS gender,
    Contact AS contact,
    Email AS email,
    Address AS address
  FROM ${EMPLOYEE_TABLE} WHERE Emp_ID = ?`;

    return this.db.query(sql, [identifier]);
  }

  /**
   * addEmployeeDetailInfo
   * @param employeeDetail require IEmployeeOther
   */
  addEmployeeDetailInfo(employeeDetail: IEmployeeOther): Promise<any> {
    let sql = `UPDATE ${EMPLOYEE_TABLE} 
    SET SSN_ID = ?,
    Residence = ?, 
    Religion = ?,  
    Department = ?,
    Division = ?, 
    Position = ?,
    Category = ?,  
    SalaryLevel = ?,
    UserGroup = ?,
    Currency = ?, 
    Bank = ?,
    AccountNo = ?, 
    SalaryStep = ?,
    Rate = ?,
    RateType = ?, 
    LastRate = ?,
    MonthlyRate = ?, 
    BeginDate = ?, 
    EndDate = ?, 
    ApplySSN = ?,
    ApplyTax = ?, 
    ApplyPF = ?, 
    NextOfKin = ?, 
    Guarantor = ?, 
    ReferedBy = ?, 
    Relation = ?, 
    Children = ?
    WHERE Emp_ID = ?`;
    return this.db
      .query(sql, [
        employeeDetail.ssnId,
        employeeDetail.residence,
        employeeDetail.religion,
        employeeDetail.department,
        employeeDetail.division,
        employeeDetail.position,
        employeeDetail.category,
        employeeDetail.salary,
        employeeDetail.userGroup,
        employeeDetail.currency,
        employeeDetail.bank,
        employeeDetail.accountNo,
        employeeDetail.salaryStep,
        employeeDetail.rate,
        employeeDetail.rateType,
        employeeDetail.lastRate,
        employeeDetail.monthlyRate,
        employeeDetail.beginDate,
        employeeDetail.endDate,
        employeeDetail.applySSN,
        employeeDetail.applyTax,
        employeeDetail.applyPF,
        employeeDetail.nextOfKin,
        employeeDetail.guarantor,
        employeeDetail.referenceBy,
        employeeDetail.relation,
        employeeDetail.children,
        employeeDetail.uuid
      ])
      .then(data => {
        return { message: `${data.affectedRows} record modified` };
      });
  }

  /**
   * setActiveEmployee update status in table
   * @param empId providee empId type string
   * @param status provide status type number
   * @returns Promise<{}>
   */
  setActiveEmployee(empId: string, status: number): Promise<any> {
    let sql = `UPDATE ${EMPLOYEE_TABLE} SET Status = ? WHERE Empid = ?`;
    const statusMsg = status == 1 ? "Active" : "InActive";
    return this.db.query(sql, [status, empId]).then(data => {
      return { message: `${data.affectedRows} Account set to ${statusMsg}` };
    });
  }

  /**
   * Insert employee to table
   * @param employee provide employee info
   * @returns Promise<string>
   */
  addEmployee(employee: IEmployee): Promise<any> {
    let sql = `INSERT INTO ${EMPLOYEE_TABLE} 
    (Emp_ID,Name,DOB,Gender,Contact,Email,Address,Maritalstatus,Hours) 
    VALUES (?,?,?,?,?,?,?,?,?)`;
    return this.db
      .query(sql, [
        employee.empId,
        employee.fullName,
        employee.dob,
        employee.gender,
        employee.contact,
        employee.email,
        employee.address,
        employee.maritalStatus,
        employee.hours
      ])
      .then(data => {
        return { message: `${data.affectedRows} record inserted` };
      });
  }
}

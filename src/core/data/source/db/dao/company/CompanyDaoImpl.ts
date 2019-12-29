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
import { CompanyDao } from "./CompanyDao";

import { injectable, inject } from "inversify";
import { DatabaseContext } from "../../../remote-source/DatabaseContext";
import { IBranch } from "../../../../../domain/entity/branch/IBranch";
import { BRANCH_TABLE, COMPANY_TABLE, EMPLOYEE_TABLE } from "../../../../../../common/constants";
import { ICompany } from "../../../../../domain/entity/company/ICompany";

/**
 * CompanyDaoImpl class
 * class implements CompanyDao {@Link ./CompanyDao}
 */
@injectable()
export class CompanyDaoImpl implements CompanyDao {
  private db: DatabaseContext;

  /**
   * @constructor
   * @param $db require DatabaseContext instance
   */
  constructor(@inject(DatabaseContext) $db: DatabaseContext) {
    this.db = $db;
  }
  //
  // ─── BRANCH ─────────────────────────────────────────────────────────────────────
  //
  getBranchWithIdentifier(identifier: string): Promise<IBranch[]> {
    let sql = `SELECT

    b.Branch_ID AS uuid,
    b.Name AS name,
    b.Contact AS contact,
    b.Location AS location,
    b.Address AS address,
    b.Email AS email,
    b.Comp_ID AS compId,
    b.Emp_ID AS empId,
    b.Website AS website,
    c.Name AS companyName,
    e.Name AS employeeName
    
    FROM ${BRANCH_TABLE} b
    
    INNER JOIN ${COMPANY_TABLE} c, ${EMPLOYEE_TABLE} e
    
    WHERE b.Comp_ID = c.id AND b.Emp_ID = e.Emp_ID AND b.Branch_ID = ?`;

    return this.db.query(sql, [identifier]);
  }
  getBranchs(): Promise<IBranch[]> {
    let sql = `SELECT

    b.Branch_ID AS uuid,
    b.Name AS name,
    b.Contact AS contact,
    b.Location AS location,
    b.Address AS address,
    b.Email AS email,
    b.Comp_ID AS compId,
    b.Emp_ID AS empId,
    b.Website AS website,
    c.Name AS companyName,
    e.Name AS employeeName
    
    FROM ${BRANCH_TABLE} b
    
    INNER JOIN ${COMPANY_TABLE} c, ${EMPLOYEE_TABLE} e
    
    WHERE b.Comp_ID = c.id AND b.Emp_ID = e.Emp_ID`;

    return this.db.query(sql, []);
  }
  removeBranch(identifier: string): Promise<any> {
    let sql = `DELETE FROM ${BRANCH_TABLE} WHERE Branch_ID = ?`;
    return this.db.query(sql, [identifier]).then(data => {
      return { message: `${data.affectedRows} record removed` };
    });
  }

  updateBranch(branch: IBranch): Promise<any> {
    let sql = `UPDATE ${BRANCH_TABLE} SET Emp_ID = ?,Comp_ID = ?,Name = ?,Location = ?,Address = ?,Contact = ?,Email = ?,Website = ? WHERE Branch_ID = ?`;
    return this.db
      .query(sql, [
        branch.empId,
        branch.compId,
        branch.name,
        branch.location,
        branch.address,
        branch.contact,
        branch.email,
        branch.website,
        branch.uuid
      ])
      .then(data => {
        return { message: `${data.affectedRows} record modified` };
      });
  }

  addBranch(branch: IBranch): Promise<any> {
    let sql = `INSERT INTO ${BRANCH_TABLE} (Branch_ID,Emp_ID,Comp_ID,Name,Location,Address,Contact,Email,Website) 
    VALUES (REPLACE(?,'-',''),?,?,?,?,?,?,?,?)`;
    return this.db
      .query(sql, [
        branch.uuid,
        branch.empId,
        branch.compId,
        branch.name,
        branch.location,
        branch.address,
        branch.contact,
        branch.email,
        branch.website
      ])
      .then(data => {
        return { message: `${data.affectedRows} record inserted` };
      });
  }

  //
  // ─── COMPANY ────────────────────────────────────────────────────────────────────
  //

  addCompany(company: ICompany): Promise<any> {
    let sql = `INSERT INTO ${COMPANY_TABLE} (Name,Location,Address,Contact,Email,Website) VALUES (?,?,?,?,?,?)`;
    return this.db
      .query(sql, [
        company.name,
        company.location,
        company.address,
        company.contact,
        company.email || "",
        company.website || ""
      ])
      .then(data => {
        return { message: `${data.affectedRows} record inserted` };
      });
  }

  updateCompany(company: ICompany): Promise<any> {
    console.log(company);
    let sql = `UPDATE ${COMPANY_TABLE} SET Name = ?,Location = ?,Address = ?,Contact = ?,Email = ?,Website = ? WHERE id = ?`;
    return this.db
      .query(sql, [
        company.name,
        company.location,
        company.address,
        company.contact,
        company.email,
        company.website,
        company.id
      ])
      .then(data => {
        return { message: `${data.affectedRows} record modified` };
      });
  }

  removeCompany(identifier: string): Promise<any> {
    let sql = `DELETE FROM ${COMPANY_TABLE} WHERE id = ?`;
    return this.db.query(sql, [identifier]).then(data => {
      return { message: `${data.affectedRows} record removed` };
    });
  }

  getCompany(): Promise<ICompany[]> {
    let sql = `SELECT id,Name AS name,Location AS location,Address AS address,
    Contact AS contact,Email AS email,Website AS website FROM ${COMPANY_TABLE}`;
    return this.db.query(sql, []).then(data => {
      return data;
    });
  }
  getCompanyWithIdentifier(identifier: string): Promise<ICompany[]> {
    let sql = `SELECT id,Name AS name,Location AS location,Address AS address,
    Contact AS contact,Email AS email,Website AS website FROM ${COMPANY_TABLE} WHERE id = ?`;
    return this.db.query(sql, [identifier]).then(data => {
      return data;
    });
  }
}

import {
  ADMIN_TABLE,
  RANK_TABLE,
  USER_TABLE,
  SUPPLIER_TABLE,
  CUSTOMER_TABLE,
  COMPANY_TABLE
} from "../../src/common/constants";

export class Fixtures {
  static resetAdminTableSql(): string {
    return `DELETE FROM ${ADMIN_TABLE};`;
  }

  static resetRankTableSql(): string {
    return `DELETE FROM ${RANK_TABLE};`;
  }

  static resetUserTableSql(): string {
    return `DELETE FROM ${USER_TABLE}; `;
  }

  static resetCustomerTableSql(): string {
    return `DELETE FROM ${CUSTOMER_TABLE}; `;
  }
  static resetSupplierTableSql(): string {
    return `DELETE FROM ${SUPPLIER_TABLE}; `;
  }
  static resetCompanyTableSql(): string {
    return `DELETE FROM ${COMPANY_TABLE}`;
  }
}

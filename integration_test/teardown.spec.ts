import DIContainer from "../src/app/loc/di.container";
import { UserDaoImpl } from "../src/core/data/source/db/dao/user/UserDaoImpl";
import { Fixtures } from "./utils/Fixtures";
const context = DIContainer.resolve<UserDaoImpl>(UserDaoImpl);

after(async () => {
  await context.db.query(Fixtures.resetAdminTableSql(), []);
  await context.db.query(Fixtures.resetUserTableSql(), []);
  await context.db.query(Fixtures.resetRankTableSql(), []);
  await context.db.query(Fixtures.resetCustomerTableSql(), []);
  await context.db.query(Fixtures.resetSupplierTableSql(), []);
  await context.db.query(Fixtures.resetCompanyTableSql(), []);
});

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

import { MysqlDatabase } from "../../MysqlDatabase";
import { ProductDao } from "./ProductDao";
import { IProduct } from "../../../../domain/entity/product/IProduct";
import { injectable, inject } from "inversify";
import { PRODUCT_TABLE } from "../../../../../common/constants";
/**
 * ProductDaoImpl
 */
@injectable()
export class ProductDaoImpl implements ProductDao {
  private db: MysqlDatabase;

  constructor(@inject(MysqlDatabase) $db: MysqlDatabase) {
    this.db = $db;
  }
  removeProduct(identifier: string): Promise<any> {
    const sql = `DELETE FROM ${PRODUCT_TABLE} WHERE Prod_ID = ?`;
    return this.db.query(sql, [identifier]).then(data => {
      return { message: `${data.affectedRows} item deleted` };
    });
  }
  updateProduct(product: IProduct): Promise<any> {
    const sql = `
    UPDATE ${PRODUCT_TABLE} 
    SET
      Name = ?,Buy_Price = ?,Retail_Price = ?,Stock = ?,Unit = ?,Barcode = ?
    WHERE Prod_ID = ?`;

    return this.db
      .query(sql, [
        product.name,
        product.buyPrice,
        product.retailPrice,
        product.stock,
        product.unit,
        product.barcode,
        product.uuid
      ])
      .then(data => {
        return { message: `${data.affectedRows} item modified` };
      });
  }
  //
  // ─── GET ALL PRODUCT ────────────────────────────────────────────────────────────
  //

  getProducts(): Promise<IProduct[]> {
    const sql = `
    SELECT
      Prod_ID AS uuid,
      Buy_Price AS buyPrice,
      Retail_Price AS retailPrice,
      Stock AS stock,
      Unit AS unit,
      Barcode AS barcode
     FROM ${PRODUCT_TABLE}`;
    return this.db.query(sql, []);
  }
  //
  // ─── GET PRODUCT WITH IDENTIFIER ────────────────────────────────────────────────
  //

  getProductWithIdentifier(identifier: string): Promise<IProduct[]> {
    const sql = `
    SELECT
      Prod_ID AS uuid,
      Buy_Price AS buyPrice,
      Retail_Price AS retailPrice,
      Stock AS stock,
      Unit AS unit,
      Barcode AS barcode
     FROM ${PRODUCT_TABLE} WHERE Prod_ID = ?`;
    return this.db.query(sql, [identifier]);
  }
  //
  // ─── CREATE PRODUCT ─────────────────────────────────────────────────────────────
  //

  addProduct(product: IProduct): Promise<any> {
    const sql = `INSERT INTO ${PRODUCT_TABLE} 
    (Prod_ID,Name,Buy_Price,Retail_Price,Stock,Unit,Barcode) VALUES(?,?,?,?,?,?,?)`;

    return this.db
      .query(sql, [
        product.uuid,
        product.name,
        product.buyPrice,
        product.retailPrice,
        product.stock,
        product.unit,
        product.barcode
      ])
      .then(data => {
        return { message: `${data.affectedRows} item inserted` };
      });
  }
}

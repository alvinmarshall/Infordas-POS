import { IFileType } from "../app/model/IFileType";

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

export const USER_TABLE: string = "users";
export const EMPLOYEE_TABLE: string = "employee";
export const RANK_TABLE: string = "rank";
export const COMPANY_TABLE: string = "company";
export const BRANCH_TABLE: string = "branch";
export const ACCESS_TABLE: string = "access";
export const PRODUCT_TABLE: string = "product";
export const CATEGORY_TABLE: string = "category";
export const BRAND_TABLE: string = "brand";
export const PURCHASE_TABLE: string = "purchase";
export const FILE_TYPE: IFileType[] = [
  {
    name: "profile",
    format: "image",
    location: "public/uploads/profile",
    table: EMPLOYEE_TABLE,
    column: "Emp_ID"
  }
];

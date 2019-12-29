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

import "reflect-metadata";
import { RemoteDataSource } from "../../src/core/data/source/remote-source/RemoteDataSource";
import { CompanyRepositoryImpl } from "../../src/core/data/repository/company/CompanyRepositoryImpl";
import { mock, instance, when, verify } from "ts-mockito";
import { TestCompanyGenerator } from "../utils/TestCompanyGenerator";
import { assert } from "chai";

describe("data.repository.company CompanyRepositoryImpl test", () => {
  let remoteDataSource: RemoteDataSource;
  let remoteDataSourceInstance: RemoteDataSource;
  let companyRepositoryImpl: CompanyRepositoryImpl;

  beforeEach(() => {
    remoteDataSource = mock<RemoteDataSource>();
    remoteDataSourceInstance = instance(remoteDataSource);
    companyRepositoryImpl = new CompanyRepositoryImpl(remoteDataSourceInstance);
  });

  it("Add Company success", async () => {
    const company = TestCompanyGenerator.create();
    const actual = { message: "1 item inserted" };
    when(remoteDataSource.addNewCompany(company)).thenResolve(actual);
    const expected = await companyRepositoryImpl.addNewCompany(company);
    assert.equal(expected, actual);
    verify(remoteDataSource.addNewCompany(company)).called();
  });

  it("Update Company success", async () => {
    const company = TestCompanyGenerator.create();
    const actual = { message: "1 item updated" };
    when(remoteDataSource.updateCompany(company)).thenResolve(actual);
    const expected = await companyRepositoryImpl.updateCompany(company);
    assert.equal(expected, actual);
    verify(remoteDataSource.updateCompany(company)).called();
  });

  it("Remove Company with identifier success", async () => {
    const identifier = "1";
    const actual = { message: "1 item removed" };
    when(remoteDataSource.removeCompany(identifier)).thenResolve(actual);
    const expected = await companyRepositoryImpl.removeCompany(identifier);
    assert.equal(expected, actual);
    verify(remoteDataSource.removeCompany(identifier)).called();
  });


  it("Add Branch success", async () => {
    const branch = TestCompanyGenerator.createBranch();
    const actual = { message: "1 item inserted" };
    when(remoteDataSource.addNewBranch(branch)).thenResolve(actual);
    const expected = await companyRepositoryImpl.addNewBranch(branch);
    assert.equal(expected, actual);
    verify(remoteDataSource.addNewBranch(branch)).called();
  });

  it("Update Branch success", async () => {
    const branch = TestCompanyGenerator.createBranch();
    const actual = { message: "1 item updated" };
    when(remoteDataSource.updateBranch(branch)).thenResolve(actual);
    const expected = await companyRepositoryImpl.updateBranch(branch);
    assert.equal(expected, actual);
    verify(remoteDataSource.updateBranch(branch)).called();
  });


});

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

import { SaveFileTask } from "../../../src/core/domain/useCase/files/SaveFileTask";
import { mock, instance, when, verify } from "ts-mockito";
import { FileRepository } from "../../../src/core/domain/repository/FileRepository";
import { TestFileGenerator } from "../../utils/TestFileGenerator";
import { assert, expect } from "chai";

describe("domain.useCase.files SaveFileTask test", () => {
  let saveFileTask: SaveFileTask;
  let fileRepository: FileRepository;
  let fileRepositoryInstance: FileRepository;

  beforeEach(() => {
    fileRepository = mock<FileRepository>();
    fileRepositoryInstance = instance(fileRepository);
    saveFileTask = new SaveFileTask(fileRepositoryInstance);
  });

  it("save file with params success", async () => {
    const file = TestFileGenerator.saveFile();
    const actual = { message: "file uploaded" };
    when(fileRepository.saveFile(file)).thenResolve(actual);
    const expected = await saveFileTask.buildUseCase(file);
    assert.equal(expected, actual);
    verify(fileRepository.saveFile(file)).called();
  });

  it("save file with no params throws exception", () => {
    const errMsg = "file params can't be null";
    expect(() => {
      saveFileTask.buildUseCase();
    }).throw(errMsg);
  });
});

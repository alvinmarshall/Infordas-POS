import { UserRepository } from "../../../src/core/domain/repository/UserRepository";
import { AddAdminTask } from "../../../src/core/domain/useCase/user/AddAdminTask";
import { mock, instance, when, verify } from "ts-mockito";
import { TestUserGeneratorTest } from "../../utils/TestUserGenerator";
import { assert, expect } from "chai";

describe("domain.useCase.user AddAdminTask test", () => {
  let userRepository: UserRepository;
  let userRepositoryInstance: UserRepository;
  let addAdminTask: AddAdminTask;

  beforeEach(() => {
    userRepository = mock<UserRepository>();
    userRepositoryInstance = instance(userRepository);
    addAdminTask = new AddAdminTask(userRepositoryInstance);
  });

  it("Register new Admin with params success", async () => {
    const admin = TestUserGeneratorTest.admin();
    const actual = "1 item inserted";
    when(userRepository.addAdmin(admin)).thenResolve(actual);
    const expected = await addAdminTask.buildUseCase(admin);
    assert.equal(actual, expected);
    verify(userRepository.addAdmin(admin)).once();
  });

  it("Register new Admin with no params throws an exception", () => {
    const errorMsg = "admin params can't be null";
    expect(() => {
      addAdminTask.buildUseCase();
    }).throw(errorMsg);
  });
});

import { UserRepository } from "../../../src/core/domain/repository/UserRepository";
import { CheckForAdminTask } from "../../../src/core/domain/useCase/user/CheckForAdminTask";
import { mock, instance, when, verify } from "ts-mockito";
import { TestUserGeneratorTest } from "../../utils/TestUserGenerator";
import { assert } from "chai";

describe("domain.usecase.user CheckForAdmin Test", () => {
  let userRepository: UserRepository;
  let userRepositoryInstance: UserRepository;
  let checkForAdmin: CheckForAdminTask;

  beforeEach(() => {
    userRepository = mock<UserRepository>();
    userRepositoryInstance = instance(userRepository);
    checkForAdmin = new CheckForAdminTask(userRepositoryInstance);
  });

  it("Check for admin success", async () => {
    const actual = TestUserGeneratorTest.checkForAdmin();
    when(userRepository.checkForAdmin()).thenResolve(actual);
    const expected = await checkForAdmin.buildUseCase();
    assert.isTrue(expected);
    assert.equal(actual, expected);
    verify(userRepository.checkForAdmin()).once();
  });
});

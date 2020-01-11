import { BaseUseCase } from "../base/BaseUseCase";
import { UserRepository } from "../../repository/UserRepository";
import { inject, injectable } from "inversify";
import { UserRepositoryImpl } from "../../../data/repository/user/UserRepositoryImpl";

@injectable()
export class CheckForAdminTask extends BaseUseCase<boolean, null> {
  private userRepository: UserRepository;

  constructor(@inject(UserRepositoryImpl) $userRepository: UserRepository) {
    super();
    this.userRepository = $userRepository;
  }
  protected generateUseCase(input?: null | undefined): Promise<boolean> {
    return this.userRepository.checkForAdmin();
  }
}

import { BaseUseCase } from "../base/BaseUseCase";
import { IUser } from "../../entity/user/IUser";
import { UserRepository } from "../../repository/UserRepository";
import { inject, injectable } from "inversify";
import { UserRepositoryImpl } from "../../../data/repository/user/UserRepositoryImpl";

@injectable()
export class GetAdminTask extends BaseUseCase<IUser[], string> {
  private userRepository: UserRepository;

  constructor(@inject(UserRepositoryImpl) $userRepository: UserRepository) {
    super();
    this.userRepository = $userRepository;
  }
  protected generateUseCase(input?: string | undefined): Promise<IUser[]> {
    if (input == null) return this.userRepository.getAdmins();
    return this.userRepository.getAdminWithIdentifier(input);
  }
}

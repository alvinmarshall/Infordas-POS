import { BaseUseCase } from "../base/BaseUseCase";
import { IAdmin } from "../../entity/user/IAdmin";
import { UserRepository } from "../../repository/UserRepository";
import { inject, injectable } from "inversify";
import { UserRepositoryImpl } from "../../../data/repository/user/UserRepositoryImpl";

/**
 * AddAdminTask class
 * super class {@Links ../base/BaseUseCase }
 */
@injectable()
export class AddAdminTask extends BaseUseCase<any, IAdmin> {
  private userRepository: UserRepository;

  /**
   * @constructor
   * @param $userRepository requires UserRepository instance
   */
  constructor(@inject(UserRepositoryImpl) $userRepository: UserRepository) {
    super();
    this.userRepository = $userRepository;
  }
  
  protected generateUseCase(input?: IAdmin | undefined): Promise<any> {
    if (input == null) throw new Error("admin params can't be null");
    return this.userRepository.addAdmin(input);
  }
}

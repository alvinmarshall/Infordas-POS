import { injectable, inject } from "inversify";
import { GetBranchTask } from "../../../core/domain/useCase/branch/GetBranchTask";
import { RemoveBranchTask } from "../../../core/domain/useCase/branch/RemoveBranchTask";
import { AddBranchTask } from "../../../core/domain/useCase/branch/AddBranchTask";
import { UpdateBranchTask } from "../../../core/domain/useCase/branch/UpdateBranchTask";
import { IBranch } from "../../../core/domain/entity/branch/IBranch";

@injectable()
export class BranchService {
  private addBranchTask: AddBranchTask;
  private getBranchTask: GetBranchTask;
  private updateBranchTask: UpdateBranchTask;
  private removeBranchTask: RemoveBranchTask;

  constructor(
    @inject(AddBranchTask) $addBranchTask: AddBranchTask,
    @inject(GetBranchTask) $getBranchTask: GetBranchTask,
    @inject(UpdateBranchTask) $updateBranchTask: UpdateBranchTask,
    @inject(RemoveBranchTask) $removeBranchTask: RemoveBranchTask,

  ) {
    this.addBranchTask = $addBranchTask;
    this.getBranchTask = $getBranchTask;
    this.updateBranchTask = $updateBranchTask;
    this.removeBranchTask = $removeBranchTask;

  }

   //
  // ─── BRANCH ─────────────────────────────────────────────────────────────────────
  //

  /**
   * addBranch
   * @param branch require type IBranch
   */
  addBranch(branch: IBranch): Promise<any> {
    return this.addBranchTask.buildUseCase(branch);
  }
  /**
   * updateBranch
   * @param branch require type IBranch
   */
  updateBranch(branch: IBranch): Promise<any> {
    return this.updateBranchTask.buildUseCase(branch);
  }

  /**
   * removeBranch
   * @param identifier require branch uuid
   */
  removeBranch(identifier: string): Promise<any> {
    return this.removeBranchTask.buildUseCase(identifier);
  }

  getBranches(): Promise<IBranch[]> {
    return this.getBranchTask.buildUseCase();
  }

  getBranchWithIdentifer(identifier: string): Promise<IBranch[]> {
    return this.getBranchTask.buildUseCase(identifier);
  }

}

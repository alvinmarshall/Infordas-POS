import { BaseUseCase } from "../base/BaseUseCase";
import { ProductRepository } from "../../repository/ProductRepository";
import { inject, injectable } from "inversify";
import { ProductRepositoryImpl } from "../../../data/repository/product/ProductRepositoryImpl";
import { IBrand } from "../../entity/product/IBrand";

/**
 * UpdateBrandTask
 * super class {@Link ../base/BaseUseCase}
 */
@injectable()
export class UpdateBrandTask extends BaseUseCase<any, IBrand> {
  private productRepository: ProductRepository;
  /**
   * @constructor
   * @param $productRepository requires ProductRepository instance
   */
  constructor(
    @inject(ProductRepositoryImpl) $productRepository: ProductRepository
  ) {
    super();
    this.productRepository = $productRepository;
  }
  protected generateUseCase(input?: IBrand | undefined): Promise<any> {
    if (input == null) throw new Error("brand update params can't be null");
    return this.productRepository.updateBrand(input);
  }
}

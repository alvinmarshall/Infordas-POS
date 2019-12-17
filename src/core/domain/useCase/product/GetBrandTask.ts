import { BaseUseCase } from "../base/BaseUseCase";
import { ProductRepository } from "../../repository/ProductRepository";
import { injectable, inject } from "inversify";
import { ProductRepositoryImpl } from "../../../data/repository/product/ProductRepositoryImpl";
import { IBrand } from "../../entity/product/IBrand";

/**
 * GetBrandTask
 * super class {@Link ../base/BaseUseCase}
 */
@injectable()
export class GetBrandTask extends BaseUseCase<IBrand[], string> {
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

  protected generateUseCase(input?: string | undefined): Promise<IBrand[]> {
    if (input == null) return this.productRepository.getBrands();
    return this.productRepository.getBrandWithIdentifier(input);
  }
}

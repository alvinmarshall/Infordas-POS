import { BaseUseCase } from "../base/BaseUseCase";
import { ICategory } from "../../entity/product/ICategory";
import { ProductRepository } from "../../repository/ProductRepository";
import { injectable, inject } from "inversify";
import { ProductRepositoryImpl } from "../../../data/repository/product/ProductRepositoryImpl";

/**
 * GetCategoryTask
 * super class {@Link ../base/BaseUseCase}
 */
@injectable()
export class GetCategoryTask extends BaseUseCase<ICategory[], string> {
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

  protected generateUseCase(input?: string | undefined): Promise<ICategory[]> {
    if (input == null) return this.productRepository.getCategories();
    return this.productRepository.getCategoryWithIdentifier(input);
  }
}

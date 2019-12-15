import { BaseUseCase } from "../base/BaseUseCase";
import { ICategory } from "../../entity/product/ICategory";
import { ProductRepository } from "../../repository/ProductRepository";
import { inject, injectable } from "inversify";
import { ProductRepositoryImpl } from "../../../data/repository/product/ProductRepositoryImpl";

/**
 * UpdateCategoryTask
 * super class {@Link ../base/BaseUseCase}
 */
@injectable()
export class UpdateCategoryTask extends BaseUseCase<any, ICategory> {
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
  protected generateUseCase(input?: ICategory | undefined): Promise<any> {
    if (input == null) throw new Error("category update params can't be null");
    return this.productRepository.updateCategory(input);
  }
}

import { BaseUseCase } from "../base/BaseUseCase";
import { ProductRepository } from "../../repository/ProductRepository";
import { injectable, inject } from "inversify";
import { ProductRepositoryImpl } from "../../../data/repository/product/ProductRepositoryImpl";

/**
 * RemoveCategoryTask
 * super class {@Link ../base/BaseUseCase}
 */
@injectable()
export class RemoveCategoryTask extends BaseUseCase<any, string> {
  private productRepository: ProductRepository;
  /**
   * @constructor
   * @param $productRepository reqiores ProductRepository instance
   */
  constructor(
    @inject(ProductRepositoryImpl) $productRepository: ProductRepository
  ) {
    super();
    this.productRepository = $productRepository;
  }
  protected generateUseCase(input?: string | undefined): Promise<any> {
    if (input == null) throw new Error("category identifier can't be null");
    return this.productRepository.removeCategory(input);
  }
}

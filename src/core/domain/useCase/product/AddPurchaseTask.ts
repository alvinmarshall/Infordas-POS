import { BaseUseCase } from "../base/BaseUseCase";
import { IPurchase } from "../../entity/product/IPurchase";
import { ProductRepository } from "../../repository/ProductRepository";
import { injectable, inject } from "inversify";
import { ProductRepositoryImpl } from "../../../data/repository/product/ProductRepositoryImpl";

/**
 * AddPurchaseTask
 * super class {@Link ../base/BaseUseCase}
 */
@injectable()
export class AddPurchaseTask extends BaseUseCase<any, IPurchase> {
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
  protected generateUseCase(input?: IPurchase | undefined): Promise<any> {
    if (input == null) throw new Error("purchase item can't be null");
    return this.productRepository.addPurchase(input);
  }
}

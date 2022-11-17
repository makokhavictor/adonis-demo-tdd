import { inject } from '@adonisjs/fold'

@inject()
export default class ProductRepository {
  public getAllProducts() {
    return [{ id: 2 }]
  }
}

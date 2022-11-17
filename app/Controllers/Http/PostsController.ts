import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ProductRepository from 'App/Repositories/ProductRepository'
import { inject } from '@adonisjs/fold'

@inject()
export default class PostsController {
  constructor(private productRepository: ProductRepository) {}
  public index() {
    const products = this.productRepository.getAllProducts()
    return {
      success: true,
      products,
    }
  }

  public find({ params }: HttpContextContract) {
    return {
      id: +params.id,
    }
  }
}

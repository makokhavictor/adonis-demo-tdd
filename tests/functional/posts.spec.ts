import { test } from '@japa/runner'
import ProductRepository from 'App/Repositories/ProductRepository'
const sinon = require('sinon')
test.group('Posts', () => {
  test('find product', async ({ client }) => {
    const response = await client.get('/posts/13')
    response.assertStatus(200)
    response.assertBodyContains({ id: 13 })
  })

  test('get all products', async ({ client }) => {
    console.log(ProductRepository)
    sinon.stub(ProductRepository.prototype, 'getAllProducts').returns([{ id: 5 }])
    const response = await client.get('/posts')
    response.assertStatus(200)
    response.assertBodyContains({
      success: true,
      products: [
        {
          id: 5,
        },
      ],
    })
  })
})

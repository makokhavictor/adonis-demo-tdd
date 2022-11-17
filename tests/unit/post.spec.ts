import { test } from '@japa/runner'
import PostsController from 'App/Controllers/Http/PostsController'

test.group('Posts', () => {
  // Write your test here
  test('display welcome page', async ({ assert }) => {
    const productRepoMock = {
      getAllProducts: () => [{ id: 5 }],
    }
    const postController = new PostsController(productRepoMock)
    assert.deepEqual(postController.index(), { success: true, products: [{ id: 2 }] })
  })
})

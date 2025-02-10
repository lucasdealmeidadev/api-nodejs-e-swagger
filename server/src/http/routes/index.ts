import type { FastifyTypedInstance } from '../../types/fastify'
import { createUser } from './user/create-user'
import { deleteUser } from './user/delete-user'
import { getUsers } from './user/get-users'

export async function routes(app: FastifyTypedInstance) {
  app.register(getUsers)
  app.register(createUser)
  app.register(deleteUser)
}
import z from 'zod'
import { deleteUserService } from '../../../services/user/delete-user-service'
import type { FastifyTypedInstance } from '../../../types/fastify'

export async function deleteUser(app: FastifyTypedInstance) {
  app.delete('/users/:id', {
    schema: {
      tags: ['users'],
      description: 'Delete a user',
      params: z.object({
        id: z.coerce.number()
      }),
      response: {
        204: z.null().describe('User deleted'),
        404: z.object({
          message: z.string(),
        }).describe('User not found'),
      }
    }
  }, async (request, reply) => {
    const { id } = request.params
    await deleteUserService({ id })

    return reply.status(204).send()
  })
}
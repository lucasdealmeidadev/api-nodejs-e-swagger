import z from 'zod'
import { updateUserService } from '../../../services/user/update-user-service'
import type { FastifyTypedInstance } from '../../../types/fastify'

export async function updateUser(app: FastifyTypedInstance) {
  app.put('/users/:id', {
    schema: {
      tags: ['users'],
      description: 'Update a user',
      params: z.object({
        id: z.coerce.number()
      }),
      body: z.object({
        name: z.string(),
        email: z.string()
      }),
      response: {
        200: z.object({
          id: z.number(),
          name: z.string(),
          email: z.string(),
          updated_at: z.date().nullable()
        }),
        409: z.object({
          message: z.string(),
        }).describe('User conflict'),
      }
    }
  }, async (request, reply) => {
    const { id } = request.params
    const { name, email } = request.body
    const user = await updateUserService({ id, name, email })

    return reply.status(200).send(user)
  })
}
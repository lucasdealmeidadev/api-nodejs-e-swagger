import z from 'zod'
import type { FastifyTypedInstance } from '../../../types/fastify'
import { getUsersService } from '../../../services/user/get-users-service'

export async function getUsers(app: FastifyTypedInstance) {
  app.get('/users', {
    schema: {
      tags: ['users'],
      description: 'List users',
      response: {
        200: z.array(z.object({
          id: z.number(),
          name: z.string(),
          email: z.string(),
          created_at: z.date().nullable(),
          updated_at: z.date().nullable()
        }))
      }
    }
  }, async (response, reply) => {
    const users = await getUsersService()

    reply.status(200).send(users)
  })
}
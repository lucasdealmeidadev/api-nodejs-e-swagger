import z from 'zod'
import { createUserService } from '../../../services/user/create-user-service'
import type { FastifyTypedInstance } from '../../../types/fastify'

export async function createUser(app: FastifyTypedInstance) {
  app.post('/users', {
    schema: {
      tags: ['users'],
      description: 'Create a new user',
      body: z.object({
        name: z.string().trim(),
        email: z.string().email().trim()
      }),
      response: {
        200: z.object({
          id: z.number(),
          name: z.string(),
          email: z.string(),
          created_at: z.date().nullable()
        }),
        409: z.object({
          message: z.string(),
        }).describe('User conflict'),
      }
    }
  }, async (request, reply) => {
    const { name, email } = request.body
    const user = await createUserService({ name, email })

    return reply.status(200).send(user)
  })
}
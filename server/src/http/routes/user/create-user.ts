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
        201: z.null().describe('User created'),
        409: z.object({
          message: z.string(),
        }).describe('User conflict'),
      }
    }
  }, async (request, reply) => {
    const { name, email } = request.body
    await createUserService({ name, email })

    return reply.status(201).send()
  })
}
import z from 'zod'
import type { FastifyTypedInstance } from '../../../types/fastify'

export async function getUsers(app: FastifyTypedInstance) {
  app.get('/users', {
    schema: {
      tags: ['users'],
      description: 'List users',
      response: {
        200: z.array(z.object({
          id: z.string(),
          name: z.string(),
          email: z.string()
        }))
      }
    }
  }, (response, reply) => {
    return []
  })
}
import z from 'zod'

const envSchema = z.object({
  CORS_URL: z.coerce.string().default("*"),
  PORT: z.coerce.number().default(3333)
})

export const env = envSchema.parse(process.env)
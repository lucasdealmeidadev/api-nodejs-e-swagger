import z from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.coerce.string(),
	CORS_URL: z.coerce.string().default('*'),
	FASTIFY_HOST: z.coerce.string().default('0.0.0.0'),
	PORT: z.coerce.number().default(3333),
});

export const env = envSchema.parse(process.env);

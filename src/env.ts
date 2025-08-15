import { z } from 'zod'

const envSchema = z.object({
  PORT: z.coerce.number().default(3030),
  DATABASE_URL: z.string().url().startsWith('postgresql://'),
})

export const environments = envSchema.parse(process.env)
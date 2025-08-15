import { defineConfig } from 'drizzle-kit';
import { environments } from "./src/env";

export default defineConfig({
  dialect: 'postgresql',
  casing: 'snake_case',
  schema: './src/db/schema/**.ts',
  out: './src/db/migrations',
  dbCredentials: {
    url: environments.DATABASE_URL,
  },
})
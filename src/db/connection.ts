import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { environments } from "../env.ts";
import { schema } from "./schema/index.ts";

export const sql = postgres(environments.DATABASE_URL);
export const db = drizzle(sql, {
  casing: "snake_case",
  schema
});

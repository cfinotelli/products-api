import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { environments } from "../env";
import { schema } from "./schema";

export const sql = postgres(environments.DATABASE_URL);
export const db = drizzle(sql, {
  casing: "snake_case",
  schema
});

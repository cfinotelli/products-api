import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: uuid().primaryKey().defaultRandom(),

  name: text().notNull(),
  description: text(),
  stock: integer().default(0).notNull(),
  price: integer().default(0).notNull(),
  discount: integer().default(0).notNull(),

  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().notNull(),
});

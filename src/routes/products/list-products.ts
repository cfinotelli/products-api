import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { db } from "../../db/connection.ts";
import { schema } from "../../db/schema/index.ts";

export const listProductsRoute: FastifyPluginCallbackZod = (app) => {
  app.get("/products", async () => {
    const products = await db.select().from(schema.products);

    return products;
  });
};

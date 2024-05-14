import { z } from "@hono/zod-openapi"

//inputs/parameters received from the user via routes
export const IpSchema = z.object({
    id: z.string().min(1).max(10).openapi({
      param: {
        name: "id",
        in: "path"
      },
      example: "123"
    })
  })
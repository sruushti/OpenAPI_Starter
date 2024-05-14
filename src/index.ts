import { OpenAPIHono, createRoute } from "@hono/zod-openapi"
import { IpSchema } from "./input"
import { UserSchema } from "./output"
import { Hono } from 'hono'
import { swaggerUI } from '@hono/swagger-ui'
const app = new OpenAPIHono()

const route = createRoute({
  method: 'get',
  path: '/user/{id}',
  request: {
    params: IpSchema
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: UserSchema
        }
      },
      description: "Get user details"
    }
  }
})

app.openapi(route, (c) => {
  const {id} = c.req.valid("param");
  return c.json({
    id,
    age: 20,
    name: 'Doe'
  })
})

app.doc('/doc', {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'OpenAPI'
  }
})

app.get('/ui', swaggerUI({url: '/doc'}))

export default app
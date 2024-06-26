### OpenAPI Spec / OpenAPI Specification (OAS)
Standard, language-agnostic interface to RESTful APIs 

### Using Hono as an HTTP framework with zod 

```
https://www.openapis.org/
```

```
npm install
npm run dev
```

```
npm run deploy
```

Check openAPI Spec file : 
```
http://127.0.0.1:8787/doc
```

Check the UI: 
```
http://127.0.0.1:8787/ui
```

Generate client using 
```
npx openapi-typescript-codegen --input ./spec.json --output ./generated 
cd Userapp
node index.js
```
The generated client library abstracts away the low-level details of making HTTP requests

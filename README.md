## Tutorial
- Download rar file
- extract file
- open terminal
- copy and run dependecies/devDependecies command
- start project

## Dependencies
pnpm : 
```
pnpm i fastify dotenv @fastify/cors @fastify/helmet @fastify/one-line-logger fastify-plugin
```
npm : 
```
npm i fastify dotenv @fastify/cors @fastify/helmet @fastify/one-line-logger fastify-plugin
```

## Dev Dependencies
pnpm : 
```
pnpm i -D @tsconfig/node16 @types/node @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint nodemon prettier ts-node tsc-alias tsconfig-paths typescript
```
npm : 
```
npm i -D @tsconfig/node16 @types/node @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint nodemon prettier ts-node tsc-alias tsconfig-paths typescript
```

## Script
```json
  "scripts": {
    "build": "tsc && tsc-alias",
    "dev": "npx nodemon",
    "start": "node dist/index.js",
    "test": "jest --detectOpenHandles",
    "format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
    "lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix",
    // optional
    "db:studio": "drizzle-kit studio --port=5555",
    "db:generate": "drizzle-kit generate",
    "db:migrate": "drizzle-kit migrate",
    "db:push": "drizzle-kit push"
  },
```

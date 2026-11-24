# Zoo API — NestJS Fundamentals

A small REST API I built while learning how NestJS is organized: modules, controllers, services and dependency injection.

**Stack:** NestJS · TypeScript · Jest

## Structure
```
src/
  cat/   # CatModule: controller + service + unit test
  dog/   # DogModule: controller + service + unit tests
  app.module.ts
```

Each animal is its own feature module with GET routes (including route params like `greet/:id`) and a POST route, and services are covered by Jest unit tests.

## Run
```bash
npm install
npm run start:dev   # http://localhost:3000
npm test
```

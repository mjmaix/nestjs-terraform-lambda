# NestJS + Terraform + AWS Lambda

Efficient NestJS for small API. Terraform with remote state setup for deploying to AWS Lambda.

## Files and Folders

| Folder                | Purpose                       |
| --------------------- | ----------------------------- |
| (root)                | API. Initialized with NestJS  |
| ./src/lambda.ts       | Entry point for AWS Lambda    |
| ./src/http-runnder.ts | local development entry point |
| ./infra               | IaC to AWS                    |
| ./test                | E2E tests                     |
| ./src                 | NestJS TypeScript codes       |
| ./runners             | Local development utils       |

## Ways of working

### Local development

Use NestJS API for local development

1.  `npm run start` & `npm run start:debug` starts the NestJS API on `localhost:3000`
2.  Use `npm run start:debug` with VSCode Launcher `Attach NestJS` to debug using VS Code breakpoints
3.  `runners/POST-zoo.rest` - sample post requests
4.  `runners/events` - partial data taken from AWS Lambda cloudwatch. Can be used to invoke the `src/lambda.ts`-`handler` method

### Deployment to AWS

Read the `readme.md` on `./infra`. Try `make reset` to try the Terraform deployment.

##### To delete tfstate.

1. Create `infra/terraform.tfvars` with content `backend_force_destroy=true`
2. Run `make destroy` to delete the created resources.
3. There are syncing errors after but it seemed to delete the files. Please verify your account's resources to avoid unwanted costs

## Take note

- Utilize [lazy-loading module](https://docs.nestjs.com/fundamentals/lazy-loading-modules) pattern to reduce startup time.
  - Study the `src/domains` examples. `zoo` is eagerly loaded while `dogs` and `cats` are lazy loaded.
  - `src/factories/lazy-module.factory.ts` simplifies the lazy-module initialization and caching.
- Webpack is not advisable as per reason mentioned on [ZenSoftware/bundled-nest](https://github.com/ZenSoftware/bundled-nest#-now-archived-for-historical-reference-)

### Lambda performance

```log
... INFO #perf bootup time: 4.315s
... INFO #perf handler time: 61.218ms
... INFO #perf handler time: 0.761ms
... INFO #perf handler time: 0.668ms
... INFO #perf handler time: 0.749ms
```

## References

https://docs.nestjs.com/faq/serverless#serverless

https://github.com/estevaodias/demo-terraform-nestjs-aws-lambda/tree/develop/ci

Special thanks to the authors

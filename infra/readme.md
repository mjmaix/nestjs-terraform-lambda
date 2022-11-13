### New project

1. Delete preconfigured file of the example

- `backend.tf`
- `.terraform/`
- `terraform.tfsate`

1. Initialzie backend config on [cloudposse/terraform-aws-tfstate-backend](https://github.com/cloudposse/terraform-aws-tfstate-backend)

```sh
# download module and providers.
terraform init

# create the state bucket, dynamodb locking table, and other resources. Create backend.tf.
terraform apply -auto-approve

# Move local state to the backend state bucket.
terraform init -force-copy
```

## Quick setup

Try `make reset` to try the Terraform deployment. This will ask for AWS credentials but can be skipped with skipping the replacements with `enter` key.

##### To delete tfstate.

1. Create `infra/terraform.tfvars` with content `backend_force_destroy=true`
2. Run `make destroy` to delete the created resources.
3. There are syncing errors after but it seemed to delete the files. Please verify your account's resources to avoid unwanted costs

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

output "base_url" {
  description = "Base URL of the Lambda function."
  value       = aws_apigatewayv2_stage.stage.invoke_url
}

output "lambda_bucket_name" {
  description = "Name of the lambda s3 bucket used to store function code"
  value       = aws_s3_bucket.lambda_bucket.id
}

output "function_name" {
  description = "Name of the Lambda function."
  value       = aws_lambda_function.function.function_name
}

output "backend_dynamodb_table_arn" {
  description = "Backend DynamoDB table ARN"
  value       = module.terraform_state_backend.dynamodb_table_arn
}
output "backend_dynamodb_table_id" {
  description = "Backend DynamoDB table ID"
  value       = module.terraform_state_backend.dynamodb_table_id
}
output "backend_dynamodb_table_name" {
  description = "Backend DynamoDB table name"
  value       = module.terraform_state_backend.dynamodb_table_name
}

output "backend_s3_bucket_arn" {
  description = "Backend S3 bucket ARN"
  value       = module.terraform_state_backend.s3_bucket_arn
}
output "backend_s3_bucket_domain_name" {
  description = "Backend S3 bucket domain name"
  value       = module.terraform_state_backend.s3_bucket_domain_name
}
output "backend_s3_bucket_id" {
  description = "Backend S3 bucket ID"
  value       = module.terraform_state_backend.s3_bucket_id
}
output "backend_terraform_backend_config" {
  description = "Backend Rendered Terraform backend config file"
  value       = module.terraform_state_backend.terraform_backend_config
}

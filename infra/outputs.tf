output "base_url" {
  description = "Base URL of the Lambda function."
  value       = aws_apigatewayv2_stage.stage.invoke_url
}

output "bucket_name" {
  description = "Name of the s3 bucket used to store function code"
  value       = aws_s3_bucket.bucket.id
}

output "function_name" {
  description = "Name of the Lambda function."
  value       = aws_lambda_function.function.function_name
}

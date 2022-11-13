resource "aws_lambda_function" "function" {
  function_name    = "nestjs-terraform-lambda"
  handler          = "src/lambda.handler"
  role             = aws_iam_role.role.arn
  runtime          = "nodejs16.x"
  s3_bucket        = aws_s3_bucket.bucket.id
  s3_key           = aws_s3_object.bucket_object.key
  source_code_hash = data.archive_file.dist.output_base64sha256
  timeout          = "10"

  environment {
    variables = {
      NODE_ENV = var.stage
    }
  }
}

resource "aws_lambda_permission" "lambda" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.function.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.api.execution_arn}/*/*"
}

resource "aws_lambda_permission" "api_gateway" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.function.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_apigatewayv2_api.api.execution_arn}/*/*"
}

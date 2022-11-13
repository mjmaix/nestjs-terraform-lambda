resource "aws_cloudwatch_log_group" "lambda" {
  name              = "/aws/lambda/${aws_lambda_function.function.function_name}/${var.stage}"
  retention_in_days = 30
}

resource "aws_cloudwatch_log_group" "apigateway" {
  name              = "/aws/apigateway/${aws_apigatewayv2_api.api.name}"
  retention_in_days = 30
}

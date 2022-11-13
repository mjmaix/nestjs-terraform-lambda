resource "aws_apigatewayv2_api" "api" {
  description   = var.project_description
  name          = var.project_name
  protocol_type = "HTTP"

  tags = {
    Project     = var.project_name
    Environment = var.stage
  }
}

resource "aws_apigatewayv2_stage" "stage" {
  depends_on = [
    aws_cloudwatch_log_group.apigateway,
  ]
  api_id      = aws_apigatewayv2_api.api.id
  auto_deploy = true
  name        = var.stage

  access_log_settings {
    destination_arn = aws_cloudwatch_log_group.apigateway.arn

    format = jsonencode({
      httpMethod              = "$context.httpMethod"
      integrationErrorMessage = "$context.integrationErrorMessage"
      protocol                = "$context.protocol"
      requestId               = "$context.requestId"
      routeKey                = "$context.routeKey"
      resourcePath            = "$context.resourcePath"
      responseLength          = "$context.responseLength"
      requestTime             = "$context.requestTime"
      sourceIp                = "$context.identity.sourceIp"
      status                  = "$context.status"
    })
  }
}

resource "aws_apigatewayv2_integration" "integration" {
  api_id             = aws_apigatewayv2_api.api.id
  integration_method = "POST"
  integration_type   = "AWS_PROXY"
  integration_uri    = aws_lambda_function.function.invoke_arn
}

resource "aws_apigatewayv2_route" "proxy" {
  api_id    = aws_apigatewayv2_api.api.id
  route_key = "ANY /{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.integration.id}"
}

resource "aws_iam_policy" "policy" {
  policy = jsonencode({
    Statement = [
      {
        Action = [
          "lambda:InvokeFunction",
          "lambda:InvokeAsync",
        ]
        Effect   = "Allow",
        Resource = "*",
      },
      {
        Action = [
          "SNS:Publish",
        ]
        Effect   = "Allow",
        Resource = "*",
      },
      {
        Action = [
          "SQS:SendMessage",
          "SQS:DeleteMessage",
          "SQS:ReceiveMessage",
          "SQS:GetQueueUrl",
          "SQS:GetQueueUrl",
          "SQS:ListQueues"
        ]
        Effect   = "Allow",
        Resource = "*",
      },
      {
        Action = [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents",
        ],
        Effect = "Allow",
        Resource = [
          "*",
        ]
      },
    ]
    Version = "2012-10-17",
  })
}

resource "aws_iam_role" "role" {
  assume_role_policy = jsonencode({
    Statement = [
      {
        Action = "sts:AssumeRole",
        Effect = "Allow",
        Principal = {
          Service = "lambda.amazonaws.com",
        },
        Sid = "",
      },
    ]
    Version = "2012-10-17",
  })
  managed_policy_arns = [
    aws_iam_policy.policy.arn,
  ]
  name = "${var.project_name}-role"
}

resource "aws_iam_role_policy_attachment" "role_policy_attachment" {
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
  role       = aws_iam_role.role.name
}

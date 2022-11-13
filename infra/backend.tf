terraform {
  required_version = ">= 0.12.2"

  backend "s3" {
    region         = "us-east-1"
    bucket         = "mja-dev-nestjs-tf-lambda-state"
    key            = "terraform.tfstate"
    dynamodb_table = "mja-dev-nestjs-tf-lambda-state-lock"
    profile        = ""
    role_arn       = ""
    encrypt        = "true"
  }
}

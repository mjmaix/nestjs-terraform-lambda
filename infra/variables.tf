variable "aws_region" {
  default     = "us-east-1"
  description = "AWS region for all resources."
  type        = string
}

variable "stage" {
  default     = "dev"
  description = "The name of the stage"
  type        = string
}

variable "app_version" {
  default     = "1.0.0"
  description = "The version of the app"
  type        = string
}

variable "project_name" {
  default     = "nestjs-terraform-lambda"
  description = "The project name"
  type        = string
}

variable "project_description" {
  default     = "NestJS Terraform Lambda"
  description = "The project description"
  type        = string
}

variable "bucket_name" {
  default     = "nestjs-terraform-lambda"
  description = "The bucket name"
  type        = string
}

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

variable "project_org" {
  default     = "mja"
  description = "The organization's abbreviation"
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

variable "lambda_bucket_name" {
  default     = "nestjs-terraform-lambda"
  description = "The lambda bucket name"
  type        = string
}

variable "backend_force_destroy" {
  default = false
  description = "To delete including the TF State deployment"
}

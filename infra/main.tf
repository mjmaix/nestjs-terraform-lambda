terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

module "terraform_state_backend" {
  source  = "cloudposse/tfstate-backend/aws"
  version = "0.38.1"

  namespace  = var.project_org
  stage      = var.stage
  name       = var.project_name
  attributes = ["state"]

  tags = {
    Environment = var.stage
    Project     = var.project_name
  }

  terraform_backend_config_file_path = "."
  terraform_backend_config_file_name = "backend.tf"
  force_destroy                      = var.backend_force_destroy
}

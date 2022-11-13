terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

# module "terraform_state_backend" {
#   source = "cloudposse/tfstate-backend/aws"
#   version     = "0.38.1"

#   namespace  = "eg"
#   stage      = "test"
#   name       = "terraform"
#   attributes = ["state"]

#   terraform_backend_config_file_path = "."
#   terraform_backend_config_file_name = "backend.tf"
#   force_destroy                      = false
# }

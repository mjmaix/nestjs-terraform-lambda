
deploy:
	terraform apply --auto-approve

reset:
	rm -rf .terraform
	rm -f .terraform.lock.hcl backend.tf terraform.tfstate terraform.tfstate.backup
	aws configure
	terraform init
	terraform apply -auto-approve
	terraform init -force-copy
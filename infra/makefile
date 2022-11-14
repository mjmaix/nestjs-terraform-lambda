
build:
	npm --prefix .. install
	npm --prefix .. run test
	npm --prefix .. run build

plan: build
	terraform plan

apply: build
	terraform apply



reset:
	rm -rf .terraform
	rm -f .terraform.lock.hcl backend.tf terraform.tfstate terraform.tfstate.backup
	aws configure
	terraform init
	terraform apply -auto-approve
	terraform init -force-copy

build:
	npm --prefix .. install
	npm --prefix .. run test
	npm --prefix .. run build

plan: build
	terraform plan

apply: build
	terraform apply
locals {
  now_stamp = formatdate("YYYYMMDDhhmmss", timestamp())
}

data "archive_file" "dist" {
  source_dir       = "${path.module}/../dist"
  output_file_mode = "0666"
  output_path      = "${path.module}/.terraform/archive_files/lambda-${local.now_stamp}.zip"
  type             = "zip"

  depends_on = [null_resource.build]
}

resource "null_resource" "build" {

  triggers = {
    updated_at = timestamp()
  }

  provisioner "local-exec" {
    command = <<EOF
    npm run test
    npm install
    npm run build
    cd dist
    npm install --omit=dev --ignore-scripts
    EOF

    working_dir = "${path.module}/.."
  }
}

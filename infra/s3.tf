locals {
  upload_file = data.archive_file.dist.output_path
}

resource "aws_s3_bucket" "bucket" {
  bucket = var.bucket_name
  tags = {
    Environment = var.stage
    Project     = var.project_name
  }
  force_destroy = true
}

resource "aws_s3_bucket_acl" "bucket_acl" {
  acl    = "private"
  bucket = aws_s3_bucket.bucket.id
}

resource "aws_s3_bucket_public_access_block" "bucket_public_access_block" {
  bucket              = aws_s3_bucket.bucket.id
  block_public_acls   = true
  block_public_policy = true
}

resource "aws_s3_object" "bucket_object" {
  bucket = aws_s3_bucket.bucket.id
  key    = "v${var.app_version}/${aws_s3_bucket.bucket.id}.zip"
  source = data.archive_file.dist.output_path
  etag   = fileexists(local.upload_file) ? filemd5(local.upload_file) : "no-etag"
}

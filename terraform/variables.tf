variable "env" {
  type    = string
  default = "dev"
}

variable "aws_region" {
  type    = string
  default = "us-east-2"
}

variable "aws_profile" {
  type    = string
  default = "tf014"
}

variable "aws_account_id" {
  type    = string
  default = "xxxxxxx"
}

variable "service_name" {
  type    = string
  default = "todos"
}

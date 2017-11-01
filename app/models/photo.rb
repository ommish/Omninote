class Photo < ApplicationRecord
  has_attached_file :image, default_url: "missing.png", s3_protocol: :https
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :user
end

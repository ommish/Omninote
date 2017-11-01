class Photo < ApplicationRecord
  has_attached_file :image, default_url: "missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/, s3_protocol: :https

  belongs_to :user
end

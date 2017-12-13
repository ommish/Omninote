class Tag < ApplicationRecord
  validates :title,
    presence: true,
    uniqueness: {
      scope: :user_id,
      case_sensitive: false,
      message: "tag already exists"
      },
    length: {
      maximum: 40,
      message: "40 character limit"
    }

  belongs_to :user
  has_many :taggings, dependent: :destroy, inverse_of: :tag
  has_many :notes, through: :taggings
end

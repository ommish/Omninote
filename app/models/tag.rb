class Tag < ApplicationRecord
  validates :title, presence: true, uniqueness: { scope: :user_id, message: "of tag must be unique" }

  belongs_to :user
  has_many :taggings, dependent: :destroy, inverse_of: :tag
  has_many :notes, through: :taggings
end

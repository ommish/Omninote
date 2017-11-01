class Note < ApplicationRecord
  validates :title, presence: true, uniqueness: { scope: :notebook_id, message: "already exists in this notebook" }

  belongs_to :notebook
  has_one :user, through: :notebook
  has_many :taggings, dependent: :destroy, inverse_of: :note
  has_many :tags, through: :taggings
end

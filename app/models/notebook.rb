class Notebook < ApplicationRecord
  validates :title, :user_id, presence: true
  validates :title, uniqueness: { scope: :user_id, case_sensitive: false, message: "title must be unique" }

  belongs_to :user
  has_many :notes, dependent: :destroy
  has_many :tags, through: :notes
end

class Notebook < ApplicationRecord
  validates :title, :user_id, presence: true
  validates :title, uniqueness: { scope: :user_id, message: "must be unique" }

  belongs_to :user
  has_many :notes, dependent: :destroy
end

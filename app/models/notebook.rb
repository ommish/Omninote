class Notebook < ApplicationRecord
  validates :title, :user_id, presence: true
  validates :title, uniqueness: { scope: :user_id, message: "Notebook title must be unique" }

  belongs_to :user
end

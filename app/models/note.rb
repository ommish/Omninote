class Note < ApplicationRecord
  validates :title, presence: true, uniqueness: { scope: :notebook_id }

  belongs_to :notebook
  has_one :user, through: :notebook

end

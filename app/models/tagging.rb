class Tagging < ApplicationRecord
  validates :tag_id, uniqueness: { scope: :post_id }

  belongs_to :tag
  belongs_to :note
end

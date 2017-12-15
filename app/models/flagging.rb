class Flagging < ApplicationRecord
  validates :note, uniqueness: true
  belongs_to :flag
  belongs_to :note
end

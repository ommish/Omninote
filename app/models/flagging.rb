class Flagging < ApplicationRecord
  validates :flag, uniqueness: { scope: :note }
  belongs_to :flag
  belongs_to :note, uniqueness: true
end

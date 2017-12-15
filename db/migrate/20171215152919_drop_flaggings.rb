class DropFlaggings < ActiveRecord::Migration[5.1]
  def change
    drop_table :flaggings
  end
end

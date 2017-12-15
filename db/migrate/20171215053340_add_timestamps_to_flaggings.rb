class AddTimestampsToFlaggings < ActiveRecord::Migration[5.1]
  def change
    add_column :flaggings, :updated_at, :datetime, null: false
    add_column :flaggings, :created_at, :datetime, null: false
  end
end

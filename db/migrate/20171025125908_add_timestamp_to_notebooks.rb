class AddTimestampToNotebooks < ActiveRecord::Migration[5.1]
  def change
    add_column :notebooks, :created_at, :datetime, null: false
    add_column :notebooks, :updated_at, :datetime, null: false
  end
end

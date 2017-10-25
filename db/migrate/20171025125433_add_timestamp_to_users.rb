class AddTimestampToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :created_at, :datetime, null: false
    add_column :users, :updated_at, :datetime, null: false
  end
end

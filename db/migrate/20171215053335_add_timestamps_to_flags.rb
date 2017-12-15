class AddTimestampsToFlags < ActiveRecord::Migration[5.1]
  def change
    add_column :flags, :updated_at, :datetime, null: false
    add_column :flags, :created_at, :datetime, null: false
  end
end

class AddTimestampToTags < ActiveRecord::Migration[5.1]
  def change
    add_column :tags, :created_at, :datetime, null: false
    add_column :tags, :updated_at, :datetime, null: false
  end
end

class AddTimestampToTaggings < ActiveRecord::Migration[5.1]
  def change
    add_column :taggings, :created_at, :datetime, null: false
    add_column :taggings, :updated_at, :datetime, null: false
  end
end

class AddUserIdToTags < ActiveRecord::Migration[5.1]
  def change
    add_column :tags, :user_id, :integer, null: false
  end
end

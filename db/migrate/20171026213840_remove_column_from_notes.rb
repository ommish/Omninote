class RemoveColumnFromNotes < ActiveRecord::Migration[5.1]
  def change
    remove_column :notes, :user_id
  end
end

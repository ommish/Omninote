class AddFlagIdToNotes < ActiveRecord::Migration[5.1]
  def change
    add_column :notes, :flag_id, :integer, null: false
    add_index :notes, :flag_id
  end
end

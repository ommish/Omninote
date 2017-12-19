class AddColumnToNotesForFlags < ActiveRecord::Migration[5.1]
  def change
    add_column :notes, :flag_id, :integer
    add_index :notes, :flag_id

    t.timestamps
  end
end

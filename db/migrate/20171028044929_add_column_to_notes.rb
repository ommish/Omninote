class AddColumnToNotes < ActiveRecord::Migration[5.1]
  def change
    add_column :notes, :body_plain, :text
  end
end

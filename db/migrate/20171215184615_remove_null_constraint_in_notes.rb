class RemoveNullConstraintInNotes < ActiveRecord::Migration[5.1]
  def change
    change_column_null :notes, :flag_id, false
  end
end

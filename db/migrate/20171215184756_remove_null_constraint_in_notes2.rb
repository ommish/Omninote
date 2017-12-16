class RemoveNullConstraintInNotes2 < ActiveRecord::Migration[5.1]
  def change
    change_column_null :notes, :flag_id, true
  end
end

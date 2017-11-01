class RemoveNoteIdFromPhotos < ActiveRecord::Migration[5.1]
  def change
    remove_column :photos, :note_id
  end
end

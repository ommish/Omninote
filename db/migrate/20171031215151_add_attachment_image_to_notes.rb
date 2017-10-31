class AddAttachmentImageToNotes < ActiveRecord::Migration[4.2]
  def self.up
    create_table :photos do |t|
      t.attachment :image
      t.integer :note_id
      t.timestamp
    end
  end

  def self.down
    drop_table :photos
  end
end

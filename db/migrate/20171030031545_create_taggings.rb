class CreateTaggings < ActiveRecord::Migration[5.1]
  def change
    create_table :taggings do |t|
      t.integer :note_id, null: false
      t.integer :tag_id, null: false
    end
  end
end

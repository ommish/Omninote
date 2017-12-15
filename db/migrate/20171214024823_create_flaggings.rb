class CreateFlaggings < ActiveRecord::Migration[5.1]
  def change
    create_table :flaggings do |t|
      t.integer :flag_id, null: false
      t.integer :note_id, null: false
      t.timestamp
    end
    add_index :flaggings, :flag_id
    add_index :flaggings, :note_id, unique: true
  end
end

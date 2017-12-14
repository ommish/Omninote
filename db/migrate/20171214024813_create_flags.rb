class CreateFlags < ActiveRecord::Migration[5.1]
  def change
    create_table :flags do |t|
      t.integer :place_id, null: false
      t.string :title, null: false
      t.integer :user_id, null: false
      t.timetamps
    end
    add_index :flags, [:place_id, :user_id], unique: true
  end
end

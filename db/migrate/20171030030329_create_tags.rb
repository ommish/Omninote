class CreateTags < ActiveRecord::Migration[5.1]
  def change
    create_table :tags do |t|
      t.string :title, null: false
      t.timestamp
    end
  end
end

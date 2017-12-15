class AddColumnToFlags < ActiveRecord::Migration[5.1]
  def change
    add_column :flags, :lat, :float, null: false
    add_column :flags, :lng, :float, null: false
  end
end

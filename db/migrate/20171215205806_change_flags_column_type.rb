class ChangeFlagsColumnType < ActiveRecord::Migration[5.1]
  def change
    change_column :flags, :place_id, :string, null: false
  end
end

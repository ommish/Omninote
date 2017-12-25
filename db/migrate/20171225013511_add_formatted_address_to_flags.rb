class AddFormattedAddressToFlags < ActiveRecord::Migration[5.1]
  def change
    add_column :flags, :formatted_address, :string
  end
end

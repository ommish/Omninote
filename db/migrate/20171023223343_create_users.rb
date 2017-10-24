class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :session_token, null: false
      t.string :password_digest, null: false
    end

    add_index :users, :email, unique: true
    add_index :users, :session_token
  end
end

class CreateClients < ActiveRecord::Migration[5.2]
  def change
    create_table :clients do |t|
      t.string :email, null: false
      t.string :fname, null: false
      t.string :lname, null: false
      t.integer :income, null: false
      t.integer :accountant_id, null: false
      t.timestamps
    end
    add_index :clients, [:email, :accountant_id], unique: true
  end
end

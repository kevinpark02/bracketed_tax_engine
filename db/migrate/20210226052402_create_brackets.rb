class CreateBrackets < ActiveRecord::Migration[5.2]
  def change
    create_table :brackets do |t|
      t.string :type, null: false
      t.integer :boundary, null: false
      t.integer :rate, null: false
      t.integer :accountant_id, null: false
      t.timestamps
    end
  end
end

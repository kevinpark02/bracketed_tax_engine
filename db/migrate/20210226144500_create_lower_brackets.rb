class CreateLowerBrackets < ActiveRecord::Migration[5.2]
  def change
    create_table :lower_brackets do |t|
      t.integer :lower_boundary, null: false
      t.integer :lower_rate, null: false
      t.integer :accountant_id, null: false
      t.timestamps
    end
    add_index :lower_brackets, :accountant_id
  end
end

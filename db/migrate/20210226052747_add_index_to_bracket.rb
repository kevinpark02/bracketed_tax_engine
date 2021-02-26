class AddIndexToBracket < ActiveRecord::Migration[5.2]
  def change
    add_index :brackets, :accountant_id
  end
end

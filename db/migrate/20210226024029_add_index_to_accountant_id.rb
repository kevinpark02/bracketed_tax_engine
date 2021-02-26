class AddIndexToAccountantId < ActiveRecord::Migration[5.2]
  def change
    add_index :clients, :accountant_id
  end
end

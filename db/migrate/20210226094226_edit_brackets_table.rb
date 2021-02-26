class EditBracketsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :brackets, :type
    add_column :brackets, :boundary_type, :string, null: false
  end
end

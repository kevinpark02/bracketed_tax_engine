class RemoveAColumnFromBrackets < ActiveRecord::Migration[5.2]
  def change
    remove_column :brackets, :boundary_type
  end
end

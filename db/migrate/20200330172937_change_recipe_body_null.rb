class ChangeRecipeBodyNull < ActiveRecord::Migration[5.2]
  def change
    change_column :recipes, :body, :string, :null => true
  end
end

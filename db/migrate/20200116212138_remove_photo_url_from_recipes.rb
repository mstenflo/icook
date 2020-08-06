class RemovePhotoUrlFromRecipes < ActiveRecord::Migration[5.2]
  def change
    remove_column :recipes, :photo_url, :string
    remove_column :recipes, :steps, :text
  end
end

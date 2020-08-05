@recipes.each do |recipe|
    json.set! recipe.id do
        json.extract! recipe, :id, :title, :ingredients, :category, :body, :author_id, :photo_url

        json.extract! recipe.author, :username
        # if recipe.photo.attached?
        #     json.photourl url_for(recipe.photo)
        # end
    end
end
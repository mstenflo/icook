@recipes.each do |recipe|
    json.set! recipe.id do
        json.extract! recipe, :id, :title, :ingredients, :category, :body, :author_id, :photo_url

        json.extract! recipe.author, :username
    end
end
@recipes.each do |recipe|
    json.set! recipe.id do
        json.extract! recipe, :id, :title, :category, :body, :author_id

        json.author do
            json.extract! recipe.author, :username
        end
        json.photo_url recipe.photo_url
    end
end
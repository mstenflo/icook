@recipes.each do |recipe|
    json.set! recipe.id do
        json.extract! recipe, :id, :title, :category, :body, :author_id
    end
end
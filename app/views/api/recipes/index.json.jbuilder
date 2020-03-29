@recipes.each do |recipe|
    json.set! recipe.id do
        json.extract! recipe, :id, :title, :ingredients :category, :body, :author_id

        json.extract! recipe.author, :username
        if recipe.photo.attached?
            json.photourl url_for(recipe.photo)
        end

        # @steps.each do |step|
        #     json.steps do
        #         json.extract! step, :id, :title, :body, :recipe_id
        #     end
        # end
        # json.@steps do
        #     json.extract! recipe.steps, :body
        # end
      #  json.photo_url url_for(recipe.photo)
    end
end
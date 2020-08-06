@recipes.each do |recipe|
    json.set! recipe.id do
        json.extract! recipe, :id, :title, :ingredients, :category, :body, :author_id, :photo_url

        json.extract! recipe.author, :username
<<<<<<< HEAD
=======
        # if recipe.photo.attached?
        #     json.photourl url_for(recipe.photo)
        # end
>>>>>>> 72d6040a392db40e13dbf2a793d5ee64b75bcc6f
    end
end
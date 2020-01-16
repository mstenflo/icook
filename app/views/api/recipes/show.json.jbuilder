json.recipe do
  # json.set! @recipe.id do
    json.extract! @recipe, :id, :title, :body, :category, :author_id
  # end
    json.extract! @recipe.author, :username
end

json.steps do
    @recipe.steps.each do |step|
      json.set! step.id do
        json.extract! step, :id, :title, :body, :recipe_id
      end
    end
end

#   @steps.each do |step|
#     json.set! step.id do
#       json.extract! step, :id, :title, :body, :recipe_id
#   end
# end

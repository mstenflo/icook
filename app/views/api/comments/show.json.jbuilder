# json.extract! @comment, :id, :body, :recipe_id, :user_id

json.comments (@comments) do |comment|
  json.id comment.id
  json.body comment.body
  json.created_at comment.created_at
  # json.created_at time_ago_in_words(comment.created_at)
  json.recipe_id comment.recipe_id
  json.user do
    json.fullname comment.user.fullname
  end
end
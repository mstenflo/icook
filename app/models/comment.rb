class Comment < ApplicationRecord

  validates :body, presence: true
  
  belongs_to :recipe,
    primary_key: :id,
    foreign_key: :recipe_id,
    class_name: 'Recipe'

  belongs_to :author,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'User'

  default_scope { order(created_at: :desc) }
  
end

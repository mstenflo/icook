class Recipe < ApplicationRecord
  validates :title, :body, :category, presence: true

  belongs_to :user
  has_one_attached :photo
  
end

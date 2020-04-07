class Recipe < ApplicationRecord
  validates :title, :category, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User'

  has_many :steps
  has_many :comments

  has_one_attached :photo
  
end

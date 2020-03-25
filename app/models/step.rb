class Step < ApplicationRecord
  # validates :title, :body, presence: true

  belongs_to :recipe
    
  # has_many_attached :photos
end

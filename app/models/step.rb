class Step < ApplicationRecord
  validates :title, presence: true

  belongs_to :recipe
    
  has_many_attached :photos
end

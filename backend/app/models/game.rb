class Game < ApplicationRecord
  has_many :notes
  validates :title, presence:true
  
end

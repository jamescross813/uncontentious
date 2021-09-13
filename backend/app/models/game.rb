class Game < ApplicationRecord
  has_many :notes
  validates :game_title, presence:true
  
end

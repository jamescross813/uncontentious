class Game < ApplicationRecord
  has_many :user_games
  has_many :notes
  
  
end

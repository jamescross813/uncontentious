class Game < ApplicationRecord
  has_many :user_games
  has_many :notes
  has_many :game_categories
  has_many :games, through: :game_categories

  
end

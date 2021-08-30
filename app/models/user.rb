class User < ApplicationRecord
    has_many :user_games
    has_many :notes
end

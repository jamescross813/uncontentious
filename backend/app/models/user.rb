class User < ApplicationRecord
    has_many :user_games
    has_many :notes

    has_secure_password

    validates :username, uniqueness: true, presence: true
    validates :password_digest, presence:true
end

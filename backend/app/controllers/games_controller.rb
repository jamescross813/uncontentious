class GamesController < ApplicationController

    def index
        games = Game.all
        render json: games
    end
    
    def show
        game = Game.find_by(id: params[:id])
        if game 
            render json: game
        else
            render json: {message: "Game not found, please try again or add the game to the records"}
        end
    end
end

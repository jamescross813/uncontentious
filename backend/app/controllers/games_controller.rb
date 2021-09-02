class GamesController < ApplicationController


    def index
        games = Game.all
        render json: games, 
            except: [:created_at, :updated_at]
    end
    
    def show
        game = Game.find_by(id: params[:id])
        if game 
            render json: game,
            except: [:created_at, :updated_at]
        else
            render json: {message: "Game not found, please try again or add the game to the records"}
        end
    end

    private

    def game_params
        params.require(:game).permit(:title, :max_players, :min_players, :description, :play_style, :max_time, :game_type)
    end

    
end

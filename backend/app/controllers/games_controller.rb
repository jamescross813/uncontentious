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

    def create
        game = Game.new(game_params)
        already_game = Game.find_by(params[:title])
        if game == already_game 
            render json: {message: "This game is already in our database!"}
        elsif game.save
            render json: game,
            except: [:created_at, :updated_at]
        else
            render json: {message: "Try again!"}
        end
    end

    def updated
        game = Game.find(parmas[:id])
        game.update(game_params)
        if game.save
            render json: game,
            except: [:created_at, :updated_at]
        else 
            render json: {message: "Unable to edit game"}
        end
    end


    private

    def game_params
        params.require(:game).permit(:title, :max_players, :min_players, :description, :play_style, :max_time, :game_type)
    end

    
end

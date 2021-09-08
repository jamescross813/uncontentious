class GamesController < ApplicationController

    def index
        games = Game.all
        render json: games, 
            except: [:created_at, :updated_at],
            include: :notes
            
    end
    
    def show
        game = Game.find_by(id: params[:id])
        if game 
            render json: game,
            except: [:created_at, :updated_at],
            include: :notes
        else
            render json: {message: "Game not found, please try again or add the game to the records"}
        end
    end

    def create
        game = Game.new(game_params)
            if game.save
                render json: game,
                except: [:created_at, :updated_at]
                
            else
                render json: {message: "Try again!"}
            end

    end

    def update
        game = Game.find_by(id: params[:id])
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
        params.require(:game).permit(:game_title, :max_players, :min_players, :description, :play_style, :max_time, :game_type, :game_categories)
    end

    
end

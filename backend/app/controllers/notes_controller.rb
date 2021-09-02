class NotesController < ApplicationController

    def index
        notes = Note.all
        render json: notes, 
            except: [:created_at, :updated_at]
    end
    
    def show
        notes = Note.find_by(id: params[:id])
        if note
            render json: notes,
            except: [:created_at, :updated_at]
        else
            render json: {message: "Note not found"}
        end
    end

    private

    def note_params
        params.require(:note).permit(:content, :game_id, :user_id)
    end
end

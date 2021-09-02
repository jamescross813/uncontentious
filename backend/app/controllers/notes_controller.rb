class NotesController < ApplicationController

    def index
        notes = Note.all
        render json: notes
    end
    
    def show
        notes = Note.find_by(id: params[:id])
        if note
            render json: notes
        else
            render json: {message: "Note not found"}
        end
    end

    def create
        note = Note.new(note_params)
        if note.save
            render json: note
        else
            render json: {messgae: "Try again!"}
        end
    end

    private

    def note_params
        params.require(:note).permit(:content, :game_id, :user_id)
    end
end

class NotesController < ApplicationController

    def index
        notes = Note.all
        render json: notes,
        include: [:games]
    end
    
    def show
        note = Note.find_by(id: params[:id])
        if note
            render json: note
        else
            render json: {message: "Note not found"}
        end
    end

    def create
        note = Note.new(note_params)
        if note.save
            render json: note
        else
            render json: {message: "Try again!"}
        end
    end

    def update
        note = Note.find(params[:id])
        note.update(note_params)
        if note.save
            render json: note
        else
            render json: {message: "Unable to edit game"}
        end
    end

    def destroy
        note = Note.find(params[:id])
        note.destroy
    end

    private

    def note_params
        params.require(:note).permit(:content, :game_id, :username)
    end
end

class Api::NotesController < ApplicationController

  def show
    @note = current_user.notes.find(params[:id])
  end

  def index
    @notes = current_user.notes
  end

  def destroy
    @note = current_user.notes.find(params[:id])
    @note.destroy!
    render :show
  end

  def update
    @note = current_user.notes.find(params[:id])
    if @note.notebook_id == note_params[:notebook_id].to_i
      @prev_notebook = null
    else
      @prev_notebook = @note.notebook_id
    end
    if @note.update(note_params)
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def create
    @note = current_user.notes.new(note_params)
    if @note.save
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def note_params
    params.require(:note).permit(:title, :body, :body_plain, :notebook_id, :id,
    :created_at, :updated_at, :prev_notebook, tag_ids: [])
  end


end

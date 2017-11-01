class Api::NotesController < ApplicationController

  def destroy
    @note = current_user.notes.find(params[:id])
    @notebooks = [@note.notebook]
    @tags = @note.tags
    render :show
    @note.destroy!
  end

  def update
    @note = current_user.notes.find(params[:id])
    @notebooks = [@note.notebook]
    prev_tags = @note.tags
    if @note.update(note_params)
      @notebooks.push(@note.notebook)
      @tags = (@note.tags + prev_tags).uniq
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def create
    @note = current_user.notes.new(note_params)
    @notebooks = [@note.notebook]
    @tags = @note.tags
    if @note.save
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def note_params
    params.require(:note).permit(:title, :body, :body_plain, :notebook_id, :id, tag_ids: [])
    # :created_at, :updated_at, tag_ids: [])
  end

end

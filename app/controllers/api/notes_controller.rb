class Api::NotesController < ApplicationController

  def destroy
    @note = current_user.notes.includes(:tags, :notebook).find(params[:id])
    @notebooks = [@note.notebook]
    @tags = @note.tags
    render :show
    @note.destroy!
  end

  def update
    @note = current_user.notes.includes(:tags, :notebook).find(params[:id])
    @notebooks = [@note.notebook]
    if !note_params[:tag_ids]
      @prev_tags = @note.tag_ids
    else
      @prev_tags = @note.tag_ids.reject { |tag_id| note_params[:tag_ids].include?(tag_id.to_s) }
    end
    if @note.update(note_params)
      if !note_params[:tag_ids]
        @note.tag_ids = []
      end
      @notebooks.push(@note.notebook)
      @tags = @note.tags
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
  end

end

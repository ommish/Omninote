  class Api::NotesController < ApplicationController

  def destroy
    @note = current_user.notes.includes(:tags, :notebook).find(params[:id])
    @notebooks = [@note.notebook]
    @tags = @note.tags
    @flags = @note.flag ? [@note.flag] : []
    @note.destroy!
    render :show
  end

  def update
    @note = current_user.notes.includes(:tags, :flag, :notebook).find(params[:id])
    @notebooks = [@note.notebook]
    @flags = @note.flag ? [@note.flag] : []
    if note_params[:tag_ids] === []
      @prev_tags = @note.tag_ids
    else
      @prev_tags = @note.tag_ids.reject { |tag_id| note_params[:tag_ids].include?(tag_id.to_s) }
    end
    if @note.update(note_params)
      @notebooks.push(@note.notebook)
      @flags.push(@note.flag) if @note.flag
      @tags = @note.tags
      render :show
    else
      render json: @note.errors.messages.values.flatten, status: 422
    end
  end

  def create
    @note = current_user.notes.new(note_params)
    @notebooks = [@note.notebook]
    @tags = @note.tags
    @flags = @note.flag ? [@note.flag] : []
    if @note.save
      render :show
    else
      render json: @note.errors.messages.values.flatten, status: 422
    end
  end

  def note_params
    params.require(:note).permit(:title, :body, :body_plain, :notebook_id, :flag_id, tag_ids: [])
  end

end

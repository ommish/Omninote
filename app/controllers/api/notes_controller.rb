  class Api::NotesController < ApplicationController

  def destroy
    @note = current_user.notes.includes(:tags).find(params[:id])
    @note.destroy!
    render :destroy
  end

  def update
    @note = current_user.notes.includes(:tags, :flag, :notebook).find(params[:id])

    notebook_ids = [@note.notebook_id]
    tag_ids = @note.tag_ids
    flag_ids = @note.flag ? [@note.flag_id] : []

    if @note.update(note_params)

      notebook_ids << @note.notebook_id if !notebook_ids.include?(@note.notebook_id)
      flag_ids << @note.flag_id if @note.flag_id && !flag_ids.include?(@note.flag_id)
      tag_ids = (tag_ids + @note.tag_ids).uniq

      @notebooks = Notebook.where(id: [notebook_ids])
      @flags = Flag.where(id: [flag_ids])
      @tags = Tag.where(id: [tag_ids])
      render :update
    else
      render json: @note.errors.messages.values.flatten, status: 422
    end
  end

  def create
    @note = current_user.notes.new(note_params)
    if @note.save
      render :create
    else
      render json: @note.errors.messages.values.flatten, status: 422
    end
  end

  def note_params
    params.require(:note).permit(:title, :body, :body_plain, :notebook_id, :flag_id, tag_ids: [])
  end

end

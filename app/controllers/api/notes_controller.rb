class Api::NotesController < ApplicationController

  def destroy
    @note = current_user.notes.find(params[:id])
    @notebooks = [@note.notebook]
    @tags = @note.tags
    @note.destroy!
    # when receiving notebooks and tags, just merge into old state (will arrays be merged or replaced??)
    # will @notebook and @tags have updated @noteIds??
    render :show
  end

  def update
    # if @note.notebook_id == note_params[:notebook_id].to_i
    #   @prev_notebook = null
    # else
    #   @prev_notebook = @note.notebook_id
    # end
    @note = current_user.notes.find(params[:id])
    @notebooks = [@note.notebook]
    prev_tags = @note.tags
    if @note.update(note_params)
      @notebooks.push(@note.notebook)
      @tags = @note.tags + prev_tags
      # are @prev tags and @notebook updated by now?
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
    params.require(:note).permit(:title, :body, :body_plain, :notebook_id, :id,
    :created_at, :updated_at, :prev_notebook, tag_ids: [])
    # shouldn't need prev-notebook
  end

end

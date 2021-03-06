class Api::TagsController < ApplicationController

  def create
    @tag = current_user.tags.new(tag_params)
    if @tag.save
      render :show
    else
      render json: @tag.errors.messages.values.flatten, status: 422
    end
  end

  def destroy
    @tag = current_user.tags.includes(:notes).find(params[:id])
    render :show
    @tag.destroy!
  end

  def tag_params
    params.require(:tag).permit(:title, note_ids: [])
  end

end

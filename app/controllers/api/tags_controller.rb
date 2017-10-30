class Api::TagsController < ApplicationController

  def update
    @tag = current_user.tags.find(params[:id])
    if @tag.update(tag_params)
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def create
    @tag = current_user.tags.new(tag_params)
    if @tag.save
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def destroy
    @tag = current_user.tags.find(params[:id])
    render :show
    @tag.destroy!
  end

  def tag_params
    params.require(:tag).permit(:title)
  end

end

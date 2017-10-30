class Api::TaggingsController < ApplicationController

  def update
    @tagging = Tagging.find(params[:id])
    if @tagging.update(tag_params)
      render :show
    else
      render json: @tagging.errors.full_messages, status: 422
    end
  end

  def create
    @tagging = current_user.tags.new(tag_params)
    if @tagging.save
      render :show
    else
      render json: @tagging.errors.full_messages, status: 422
    end
  end

  def destroy
    @tagging = current_user.tags.find(params[:id])
    @notes = @tagging.notes
    @tagging.destroy!
    render :show
  end

  def tag_params
    params.require(:tag).permit(:title)
  end

end

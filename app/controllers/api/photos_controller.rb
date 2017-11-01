class Api::PhotosController < ApplicationController
  def create
    @photo = current_user.photos.new(photo_params)
    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def photo_params
    params.require(:photo).permit(:image)
  end

end

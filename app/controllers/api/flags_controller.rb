class Api::FlagsController < ApplicationController
  def create
    @flag = current_user.flags.new(flag_params)
    if @flag.save
      render :show
    else
      render json: @flag.errors.messages.values.flatten, status: 422
    end
  end

  def destroy
    @flag = current_user.flags.includes(:notes).find(params[:id])
    @flag.destroy!
    render :show
  end

  def flag_params
    params.require(:flag).permit(:title, :place_id, :lat, :lng, :formatted_address)
  end
end

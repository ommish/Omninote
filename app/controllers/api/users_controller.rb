class Api::UsersController < ApplicationController
  # TODO render json stuff
  def create
    @user = User.new(user_params)
    if @user.save
      render partial: 'user', locals: { user: @user }
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def user_params
    params.require(:user).permit(:email, :password)
  end

end

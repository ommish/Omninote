class SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      login(@user)
      render partial: 'api/users/user', locals: { user: @user }
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: ['Not logged in'], status: 404
    end
  end


end

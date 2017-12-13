class Api::NotebooksController < ApplicationController

  def create
    @notebook = current_user.notebooks.new(notebook_params)
    if @notebook.save
      render :show
    else
      render json: @notebook.errors.messages.values.flatten, status: 422
    end
  end

  def destroy
    @notebook = current_user.notebooks.includes(:notes => :tags).find(params[:id])
    render :show
    @notebook.destroy!
  end

  def notebook_params
    params.require(:notebook).permit(:title)
  end

end

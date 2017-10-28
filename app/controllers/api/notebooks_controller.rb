class Api::NotebooksController < ApplicationController
  def show
    @notebook = Notebook.find(params[:id])
    @notes = @notebook.notes
  end

  def index
    @notebooks = current_user.notebooks
  end

  def create
    @notebook = current_user.notebooks.new(notebook_params)
    @notes = @notebook.notes
    if @notebook.save
      render :show
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def destroy
    @notebook = Notebook.find(params[:id])
    @notes = @notebook.notes
    @notebook.destroy!
    render :show
  end

  def update
    @notebook = Notebook.find(params[:id])
    @notes = @notebook.notes
    if @notebook.update(notebook_params)
      render :show
    else
      render json: @notebook.errors.full_messages
    end
  end

  def notebook_params
    params.require(:notebook).permit(:title)
  end

end

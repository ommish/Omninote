class Api::AllItemsController < ApplicationController
  def index
    @notes = current_user.notes
    @notebooks = current_user.notebooks
  end
end

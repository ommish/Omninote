class Api::AllItemsController < ApplicationController
  def index
    @notes = current_user.notes
    @notebooks = current_user.notebooks
    @tags = current_user.tags
  end
end

class Api::AllItemsController < ApplicationController
  def index
    @notebooks = current_user.notebooks.includes(:notes)
    @notes = current_user.notes.includes(:tags)
    @tags = current_user.tags.includes(:notes)
  end
end

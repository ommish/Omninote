class Api::AllItemsController < ApplicationController
  def index
    @notebooks = current_user.notebooks.includes(:notes)
    @notes = current_user.notes.includes(:tags, :flags)
    @tags = current_user.tags.includes(:notes)
    @flags = current_user.flags.includes(:notes)
  end
end

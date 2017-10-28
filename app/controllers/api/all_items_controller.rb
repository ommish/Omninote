class Api::AllItemsController < ApplicationController
  def index
    @notes = current_user.notes
    @notebooks = current_user.notebooks
    @titles = []
    @notebooks.each do |notebook|
      title = notebook.title
      id = notebook.id
      @titles.push(id => title)
    end
  end
end

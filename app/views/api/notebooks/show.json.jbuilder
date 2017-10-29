json.notebook do
  json.set! @notebook.id do
    json.partial! 'notebook', notebook: @notebook
  end
end

json.notes @notes

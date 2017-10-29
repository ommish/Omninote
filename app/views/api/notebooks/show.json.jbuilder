json.notebook do
  json.partial! 'notebook', notebook: @notebook
end

json.notes @notes

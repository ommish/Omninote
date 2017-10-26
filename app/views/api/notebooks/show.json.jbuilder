json.notebook do
  json.partial! 'notebook', notebook: @notebook
end

json.notes do
  @notebook.notes.each do |note|
    json.partial! '/api/notes/note', note: note
  end
end

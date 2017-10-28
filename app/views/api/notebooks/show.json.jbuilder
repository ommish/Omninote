json.notebook do
  json.set! @notebook.id do
    json.partial! 'notebook', notebook: @notebook
  end
end

json.notes do
  @notes.each do |note|
    json.set! note.id do
      json.partial! '/api/notes/note', note: note
    end
  end
end

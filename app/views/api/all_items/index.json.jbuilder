json.notebooks do
  @notebooks.each do |notebook|
    json.set! notebook.id do
      json.partial! 'api/notebooks/notebook', notebook: notebook
    end
  end
end

json.notes do
  @notes.each do |note|
    json.set! note.id do
      json.partial! 'api/notes/note', note: note
    end
  end
end

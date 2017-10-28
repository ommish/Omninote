json.notebooks do
  @notebooks.each do |notebook|
    json.partial! 'api/notebooks/notebook', notebook: notebook
  end
end

json.notes do
  @notes.each do |note|
    json.partial! 'api/notes/note', note: note
  end
end

json.notebookTitles @titles

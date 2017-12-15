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

json.tags do
  @tags.each do |tag|
    json.set! tag.id do
      json.partial! 'api/tags/tag', tag: tag
    end
  end
end

json.flags do
  @flags.each do |flag|
    json.set! flag.id do
      json.partial! 'api/flags/flag', flag: flag
    end
  end
end

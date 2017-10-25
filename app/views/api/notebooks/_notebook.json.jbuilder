json.set! notebook.id do
  json.id notebook.id
  json.title notebook.title
  json.noteIds []
  json.updatedAt notebook.updated_at
end

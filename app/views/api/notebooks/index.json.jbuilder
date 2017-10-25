@notebooks.each do |notebook|
  json.partial! 'notebook' notebook: notebook
end

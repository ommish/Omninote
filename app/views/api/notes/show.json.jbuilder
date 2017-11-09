json.note do
  json.partial! 'note', note: @note
end

json.notebooks do
  @notebooks.each do |notebook|
    json.set! notebook.id do
      json.partial! 'api/notebooks/notebook', notebook: notebook
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

json.prevTags @prev_tags

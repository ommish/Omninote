json.note do
  json.partial! 'note', note: @note
end

json.notebooks @notebooks

tags = {}
@tags.each do |tag|
  tags[tag.id] = tag
end

json.tags tags

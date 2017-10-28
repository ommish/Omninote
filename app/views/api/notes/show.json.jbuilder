json.set! @note.id do
  json.partial! 'note', note: @note
end

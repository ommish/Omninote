@notes.each do |note|
  json.partial! 'note', note: note
end

class Flag < ApplicationRecord
  validates :place_id, :title, presence: true
  validates :place_id, uniqueness: { scope: :user }

  belongs_to :user
  has_many :flaggings, dependent: :destroy, inverse_of: :flag
  has_many :notes, through: :flaggings

end


# polymorphic notes
# polymorphic association- noteable- notes can belong to notebook or Flag
# add migration for notes so it holds foreign key + foreign class
# pros: polymorphic associations!
# cons: editor component would have to double as a notebook note editor and a map note editor (or )

# OR

# new table for new kind of note, specfic for locations?

# OR
# just new kind of tag that's a location, so just adding another belongs to association on the same notes
# notes can belong both to a notebook and a location
# add modal for location selector
# another modal to view tagged locations
# or combine modals so index and

# but then does a note need to belong to both a notebook and a location?


# click add flag
# opens map view
# user inputs search query
# autocomplete for matching places
# add flag button on location marker
# add flag button will create new flag, apply name to note editor view
# add flag button turns into change flag button

# map view shows map and list of all flagged notes on left, with locations within map view
# location markers also have button to filter notes to only that location's notes
# button at top of flagged locations list to see all flagged locations

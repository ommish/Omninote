# Omninote

[Omninote](https://omninote.herokuapp.com/) is a single-page clone of [Evernote](https://evernote.com/), a web application for organizing notes in rich format text through notebooks and tags.

Omninote uses the React-Redux model to render content dynamically on the frontend, and the Ruby on Rails framework for saving data on the backend.

## Main Features

### User Authentication
Users can sign up, log in, and log out by setting an email address and password for their account.

![user auth](https://raw.githubusercontent.com/ommish/Omninote/master/README_images/auth.gif)

### Main Components
Many of the app's components are re-used for different purposes using React-Redux. The main components rendered are:

1. Sidenav
  - Navbar for toggling views
2. Note Index
  - Lists all notes
  - Lists a notebook's associated notes
  - Lists a tag's associated notes
  - Lists a flag's associated notes
3. Sidemenu
  - Lists all notebooks
  - Lists all tags
4. Editor
  - Creates new notes
  - Edits existing notes
5. Map View
  - Displays locations of flagged notes
  - Lists in-view flagged locations and their associated notes

#### Note Index
The note index displays a list of all notes, or just the notes associated with the selected notebook/tag/flag.

At the top of the index is a search bar to filter notes. Search queries will match any content in the notes' title or body.

![note order](https://raw.githubusercontent.com/ommish/Omninote/master/README_images/order.gif)

A menu of several sorting options is also available to sort notes.
Notes are by default sorted in order of `updatedAtNewest`. Selecting a different option dispatches an action with an attached index, which is used to select the appropriate comparer callback to pass to the sorting function.

    `const comparingFunctions = [
    updatedAtNewest,
    createdAtNewest,
    updatedAtOldest,
    createdAtOldest,
    titleAsc,
    titleDesc
    ];`

    `export const sortItems = (notes, sortOrder) => (
      notes.sort(comparingFunctions[sortOrder]);
    );`

The same function is used to sort notebooks and tags by title in the sidemenu.

![notebooks and tags](https://raw.githubusercontent.com/ommish/Omninote/master/README_images/notebooks_tags.gif)


#### Rich Text Editor
Omninote utilizes Quill-React, a text editor component. Image attachments are saved via paperclip and AWS, then appended to the note body.

![note](https://raw.githubusercontent.com/ommish/Omninote/master/README_images/note.gif)


The editor toggles to full-width when creating a new note, and the notebook selector is automatically set to whatever notebook matches the request's path. The notebook create form can also be opened from the same dropdown menu.

All tags are listed as clickable buttons at the top of the editor. This component also includes an input for creating new tags.

A search bar from the Google Maps Autocomplete API is used for flagging notes with a location.

Autosave begins running once a user focuses on the editor's title or body inputs and actually attempts to save only after the user stops typing and if the note is valid (ie has a title and notebook). Toggling tags, the selected notebook, or changing the flag will also trigger a save.

![autosave](https://raw.githubusercontent.com/ommish/Omninote/master/README_images/autosave.gif)

#### Simple UI
Prompts for similar actions (eg. deleting a note, deleting a notebook, and deleting a tag) have similar design but clear markings (headers, icons, and tooltips), making it easy for the user to figure out how to navigate the app.


![note_delete](https://github.com/ommish/Omninote/blob/master/README_images/note_delete.png "Delete Notes")


![notebook_delete](https://github.com/ommish/Omninote/blob/master/README_images/notebook_delete.png "Delete Notebooks")


### Future Directions

Additional features to be added:
1. Photo gallery to display current user's uploaded images
2. Responsive design

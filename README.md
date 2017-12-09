# Omninote

[Omninote](https://omninote.herokuapp.com/) is a single-page clone of [Evernote](https://evernote.com/), a web application for organizing notes in rich format text through notebooks and tags.

Omninote uses the React-Redux model to render content dynamically on the frontend, and the Ruby on Rails framework for saving data on the backend.

## Main Features

### User Authentication
Users can sign up, log in, and log out by setting an email address and password for their account.

[[ https://github.com/ommish/Omninote/blob/master/README_images/auth.gif | height = 200px ]]

### Main Components
Many of the app's components are re-used for different purposes using React-Redux. The four main components rendered are:

1. Sidenav
  - Navbar for toggling views
2. Note Index
  - Lists all notes
  - Lists a notebook's associated notes
  - Lists a tag's associated notes
3. Sidemenu
  - Lists all notebooks
  - Lists all tags
4. Editor
  - Creates new notes
  - Edits existing notes

#### Note Index
Notes are super easy to find! The note index can display a list of all your notes, or just the notes associated with the notebook/tag that you select through the sidemenu.

At the top of the index is a search bar to filter notes. Your search query will try to match any content in the title or body. With all the current user's notes stored on the front end, queries are extremely quick.

[[ https://github.com/ommish/Omninote/blob/master/README_images/order.gif | height = 200px ]]

A menu of several sorting options is also available to sort your notes.
Notes are by default sorted in order of `updatedAtNewest`. Selecting a different option dispatches an action with an attached index number, which represents which comparer callback function to pass to the sorting function, and this updates the note index component's props, triggering a re-render with newly sorted notes.

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

[[ https://github.com/ommish/Omninote/blob/master/README_images/notebooks_tags.gif | height = 200px ]]


#### Rich Text Editor
Omninote utilizes Quill-React, a text editor component. Image attachments are saved via paperclip  and AWS, then appended to the document.

[[ https://github.com/ommish/Omninote/blob/master/README_images/note.gif | height = 200px ]]

The editor toggles to full-width when creating a new note, and the notebook selector is automatically set to whatever notebook you were viewing. The notebook create form can also be opened from the same menu if none of your existing notebooks are the right fit.

The app listens for changes in the path in order to update the selected notebook.

    componentWillReceiveProps(newProps) {


Toggle to new notebook if visiting a different notebook:

    if (newNotebookId && currentNotebookId !== newNotebookId) {
        const notebook = this.props.notebooks[newNotebookId];
        this.props.toggleSelectedNotebook(notebook);
      }

Toggle to new notebook if visiting a different note:

      else if (!newNotebookId && newNoteId) {
        const notebook = this.props.notebooks[this.props.notes[newNoteId].notebookId];
        this.props.toggleSelectedNotebook(notebook);

Toggle to no notebook if going to all notes:

      } else if (newProps.location.pathname === "/notes") {
          this.props.toggleSelectedNotebook({id: false});
        }
      }
    }


All your tags are listed at the top of your editor so you can select or deselect them with just a click. If you need a new tag, you can create one right from the same menu. This saves new tag and its association with the note on the backend, and the response will update the redux state, toggling the new tag to be selected. A bi-directional (`:inverse_of`) association set up in Rails obviates the need to send separate "tagging" post requests.

    createTag(e) {
      if (e.key === 'Enter') {
        const newState = merge({}, this.state);
        this.props.createTag({title: e.target.value, noteIds: [this.state.note.id]})
        .then((res) => {
          this.props.clearTagErrors();
          if (!this.state.note.tagIds.includes(res.tag.id)) {
            newState.note.tagIds.push(res.tag.id);
            newState.tagInput = "";
            this.setState(newState);
          }
        });
      }
    }

#### Simple UI
Prompts for similar actions (eg. deleting a note, deleting a notebook, and deleting a tag) have similar design but clear markings (headers, icons, and tooltips), making it easy for the user to figure out how to navigate the app.


![note_delete](https://github.com/ommish/Omninote/blob/master/README_images/note_delete.png "Delete Notes")


![notebook_delete](https://github.com/ommish/Omninote/blob/master/README_images/notebook_delete.png "Delete Notebooks")


### Future Directions

Additional features to be added:
1. Autosave
2. Photo gallery to display current user's uploaded images
3. Responsive design

# Omninote

[Omninote](https://omninote.herokuapp.com/) is a single-page clone of [Evernote](https://evernote.com/), a web application for organizing notes in rich format text through notebooks, tags, and location flags.

Omninote uses the React-Redux model to render content dynamically on the front end, and the Ruby on Rails framework for saving data on the back end.

## Main Features

### User Authentication
Back end authentication is achieved using the Bcrypt gem for hashing and salting passwords and SecureRandom module for generating session tokens.
Users can sign up, log in, and log out by setting an email address and password for their account.

![user auth](https://raw.githubusercontent.com/ommish/Omninote/master/README_images/auth.gif)

### Main Components
Many of the app's components are re-used for different purposes using React-Redux. The main components rendered are:

1. Sidenav (navbar for opening menus, and logging out)
2. Note Index (can be searched, sorted, and filtered by notebook, tag, or flag)
3. Sidemenu (separate menus for notebooks and tags that can be searched)
4. Editor (features rich format text, Amazon S3 upload, and autosave)
5. Map View (uses Google Maps API to display where notes are saved with markers and info windows)

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
Omninote utilizes Quill-React, a text editor library that allows text to be formatted in rich format.
Image attachments are saved via paperclip and AWS, then appended to the note body as an image tag.

![note](https://raw.githubusercontent.com/ommish/Omninote/master/README_images/note.gif)

In addition to the text editor, the editor component holds a list of all the user's tags, which can be clicked to apply the tag to the note, as well as an input for creating new tags.

The editor also has a notebook dropdown menu to assign a notebook to the current note, and a search bar from the Google Maps Autocomplete API for flagging notes with a location.

Autosave is implemented using debouncing.
The below debouncing function accepts a function and a time interval as arguments, and returns another function that, when invoked with a truthy argument will immediately invoke the original function, and when invoked with a falsely argument will set a timeout to invoke the original function only after the specified amount of time has passed since it was last invoked.

    `export const debounce = (func, delay) => {
      let timeoutFunc;
      return (callImmediately) => {
        const laterFunc = () => {
          timeoutFunc = null;
          if (!callImmediately) func();
        }
        window.clearTimeout(timeoutFunc);
        timeoutFunc = window.setTimeout(laterFunc, delay);
        if (callImmediately || !timeoutFunc) func();
      };
    };`

By debouncing the save function, instead of saving with every change of the note's title or body which would result in a very high number of unnecessary requests to the back end API, the editor only saves when it needs to, i.e. when the user has paused typing.
Toggling tags, the selected notebook, or changing the flag will trigger an immediate save.

![autosave](https://raw.githubusercontent.com/ommish/Omninote/master/README_images/autosave.gif)

#### Simple UI
Prompts for similar actions (eg. deleting a note, notebook, tag, or flag) have similar design but clear markings (headers, icons, and tooltips), making it easy for the user to navigate the app.


### Future Directions

Additional features to be added:
1. Photo gallery to display current user's uploaded images
2. User interaction (users can share notes with other users)

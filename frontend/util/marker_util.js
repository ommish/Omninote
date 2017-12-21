
function addNoteTitle(marker, note) {
  marker.noteTitles[note.id] = `<li class="firstHeading">- ${note.title}</li>`;
};

function removeNoteTitle(marker, noteId) {
  delete marker.noteTitles[noteId];
};

function setNewInfoWIndowContent(flag, marker, notes) {
  marker.noteTitles = {};
  notes.forEach((note) => {
    if (flag.id === note.flagId) {
      addNoteTitle(marker, note);
    }
  });

  marker.infoHeading = flag.noteIds.length > 0 ? `<h4 class="firstHeading">Notes at ${flag.title}:</h4>` : `<h4 class="firstHeading">No notes for ${flag.title}</h4>`;

  setInfoWindowContent(marker);
};

function setInfoWindowContent (marker) {
  marker.infoWindowContent =
  `<div>`+
  `${marker.infoHeading}`+
  `<ul>`+
  `${Object.values(marker.noteTitles).join("")}`+
  `</ul>`+
  '</div>';
}

export function createMarkers(flags, googleMap, infoWindow, notes) {
  const newMarkers = {};
  flags.forEach((flag) => {
    newMarkers[flag.id] = createMarker(flag, googleMap, infoWindow, notes);
  });
  return newMarkers;
};

export function createMarker(flag, googleMap, infoWindow, notes = []) {
  const marker = new google.maps.Marker({
    position: {
      lat: flag.lat,
      lng: flag.lng,
    },
    title: flag.title,
    label: `${flag.noteIds.length}`,
    map: googleMap,
  });

  marker.color = "white";

  setNewInfoWIndowContent(flag, marker, notes);

  marker.addListener('click', () => {
    infoWindow.setContent(marker.infoWindowContent);
    infoWindow.open(googleMap, marker);
  });
  return marker;
};

export function removeMarker(marker) {
  marker.setMap(null);
  return marker;
};

export function addNoteToMarker (flagId, marker, note) {
  const oldLabel = marker.getLabel();
  marker.setLabel(`${parseInt(oldLabel) + 1}`)
  addNoteTitle(marker, note);
  setInfoWindowContent(marker);
  return marker;
}

export function removeNoteFromMarker(flagId, marker, noteId) {
  const oldLabel = marker.getLabel();
  marker.setLabel(`${parseInt(oldLabel) - 1}`)
  removeNoteTitle(marker, noteId);
  setInfoWindowContent(marker);
  return marker;
}

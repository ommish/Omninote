
const setNewInfoWIndowContent = (flag, marker, notes) => {
  marker.noteTitles = {};
  notes.forEach((note) => {
    if (flag.id === note.flagId) {
      marker.noteTitles[note.id] = `<li class="firstHeading">- ${note.title}</li>`
    }
  });

  marker.infoHeading = flag.noteIds.length > 0 ? `<h4 class="firstHeading">Notes at ${flag.title}:</h4>` : `<h4 class="firstHeading">No notes for ${flag.title}</h4>`
  marker.infoWindowContent =
  `<div>`+
  `${marker.infoHeading}`+
  `<ul>`+
  `${Object.values(marker.noteTitles).join("")}`+
  `</ul>`+
  '</div>';
};

const updateInfoWindowContent = (flag, marker, note) => {
  if (flag.noteIds.includes(note.id)) {
    marker.noteTitles[note.id] = `<li class="firstHeading">${note.title}</li>`;
  } else {
    delete marker.noteTitles[note.id];
  }
  marker.infoHeading = flag.noteIds.length > 0 ? `<h4 class="firstHeading">Notes at ${flag.title}:</h4>` : `<h4 class="firstHeading">No notes for ${flag.title}</h4>`
  marker.infoWindowContent =
  `<div>`+
  `${marker.infoHeading}`+
  `<ul>`+
  `${Object.values(marker.noteTitles).join("")}`+
  `</ul>`+
  '</div>';
};

export const createMarker = (flag, googleMap, infoWindow, notes = []) => {
  const marker = new google.maps.Marker({
    position: {
      lat: flag.lat,
      lng: flag.lng,
    },
    title: flag.title,
    label: `${flag.noteIds.length}`,
    map: googleMap,
  });

  setNewInfoWIndowContent(flag, marker, notes);

  marker.addListener('click', () => {
    infoWindow.setContent(marker.infoWindowContent);
    infoWindow.open(googleMap, marker);
  });
  return marker;
};

export const createMarkers = (flags, googleMap, infoWindow, notes) => {
  const newMarkers = {};
  flags.forEach((flag) => {
    newMarkers[flag.id] = createMarker(flag, googleMap, infoWindow, notes);
  });
  return newMarkers;
};

export const updateMarker = (flag, marker, note) => {
  marker.setLabel(`${flag.noteIds.length}`)
  updateInfoWindowContent(flag, marker, note)
  return marker;
};

export const removeMarker = (marker) => {
  marker.setMap(null);
  return marker;
};

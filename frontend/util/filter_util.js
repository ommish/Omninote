export const flagsWithNotes = (flags, notes) => {
  return flags.map((flag) => {
    const flagNotes = flag.noteIds.map((noteId) => {
      return notes[noteId];
    });
    flag.flagNotes = flagNotes;
    return flag;
  });
};

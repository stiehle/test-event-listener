const testButtonEl = document.querySelector(".test-note");
const saveButtonEl = document.querySelector(".save-note");
const deleteButtonEl = document.querySelector(".delete-note");

testButtonEl.addEventListener("click", testTest);
saveButtonEl.addEventListener("click", saveNoteEntry);
deleteButtonEl.addEventListener("click", deleteNoteEntry);

const notesList = [];

function saveNoteEntry(note) {
  console.log("in save");
  console.log("note:", note, "this:", this);
}

function deleteNoteEntry(note) {
  console.log("in delete");
  console.log("note:", note, "this:", this);
  saveNoteEntry();
}

function testTest() {
  console.log("in testTest");

  for (let i = 0; i < 5; i++) {
    notesEntry = {
      id: i,
      title: "Test",
      content: "Nur mal ein Test!",
      lastUpdated: Date.now(),
    };
    notesList.push(notesEntry);
  }

  console.log("notes:", notesList);

  const findNote = notesList.find((note) => note.id === 0);
  console.log(findNote, findNote.lastUpdated);

  saveNoteEntry(findNote);
}

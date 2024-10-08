import {makeNoteUI} from './createNoteUI';
import Note from '../classes/Note';

let mainContent = document.getElementById("content-right");

export function showNote() {
    //clear main content
    mainContent.innerHTML = '';


    let noteContainer = document.createElement("div");
    noteContainer.id = "note-container";
    mainContent.appendChild(noteContainer);

    const localNotes = getAllNotes();

    localNotes.forEach(note => makeNoteUI(note, noteContainer));
}

export function getAllNotes() {
    let localNotesData = JSON.parse(localStorage.getItem('allNotes'));
    const localNotes = localNotesData.map(noteData => Note.fromJSON(noteData));
    return localNotes;
}

export function updateAllNotes(newNotes) {
    let newNotesData = JSON.stringify(newNotes);
    localStorage.setItem('allNotes', newNotesData);
    console.log(getAllNotes());
}
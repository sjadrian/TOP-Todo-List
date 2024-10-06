import {makeNoteUI} from './createNoteUI';

let mainContent = document.getElementById("content-right");


export function showNote(notes) {
    //clear main content
    mainContent.innerHTML = '';

    let noteContainer = document.createElement("div");
    noteContainer.id = "note-container";
    mainContent.appendChild(noteContainer);

    notes.forEach(note => makeNoteUI(note, notes, noteContainer));
}
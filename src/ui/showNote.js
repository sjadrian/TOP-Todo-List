import {makeNoteUI} from './createNoteUI';
import { allNotes } from '../data/store';
import {changeActiveTab} from './changeActiveTab';

let mainContent = document.getElementById("content-right");
let noteButton = document.getElementById("note-button");

export function showNote() {
    //clear main content
    mainContent.innerHTML = '';

    changeActiveTab(noteButton);

    let noteContainer = document.createElement("div");
    noteContainer.id = "note-container";
    mainContent.appendChild(noteContainer);

    allNotes.get().forEach(note => makeNoteUI(note, noteContainer));
}
import {makeNoteUI} from './createNoteUI';
import { allNotes } from '../data/store';
import {changeActiveTab} from './changeActiveTab';


import Note from '../classes/Note';

let mainContent = document.getElementById("content-right");
let noteButton = document.getElementById("note-button");

export function showNote() {
    //clear main content
    mainContent.innerHTML = '';

    // changeActiveTab(noteButton);

    let noteContainer = document.createElement("div");
    noteContainer.id = "note-container";
    mainContent.appendChild(noteContainer);

    // let localNotesData = JSON.parse(localStorage.getItem('xxx'));
    // const localNotes = localNotesData.map(noteData => new Note(noteData._title, noteData._description));

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
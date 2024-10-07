import {showNote} from './showNote.js';
import { allNotes } from '../data/store.js';   
import { updateAllNotes, getAllNotes } from './showNote.js';     

export function makeNoteUI(note, noteContainer) {

    // create div & give class todo
    let div = document.createElement("div");
    div.classList.add("note");

    //title
    let divTitle = document.createElement("div");
    divTitle.id = "note-title";
    divTitle.contentEditable = true;
    divTitle.innerHTML = note.title;

    // description
    let divDescription = document.createElement("div");
    divDescription.id = "note-description";
    divDescription.innerHTML = note.description.replace(/\n/g, "<br>");
    divDescription.contentEditable = true;
    console.log(note.divDescription);


    // delete button
    let deleteButton = document.createElement("button");
    deleteButton.id = "delete-note";
    deleteButton.innerHTML = "X";

    div.appendChild(divTitle);
    div.appendChild(deleteButton);
    div.appendChild(divDescription);

    noteContainer.appendChild(div);

    //functionalities
    deleteButton.addEventListener("click", ()=> {

        console.log('yox');
        let allNotex = getAllNotes(); 
        console.log('allNotex', allNotex);
        
        let filteredNotes = allNotex.filter(existingNote => existingNote.id !==  note.id);
        console.log('filtered:',filteredNotes);

        updateAllNotes(filteredNotes);
        showNote();
    });

    //change in title
    divTitle.addEventListener('input', function(event) {
        const maxLength = 20; // Set your desired character limit

        const currentText = divTitle.innerHTML;

        // Check if the content length exceeds the limit
        if (currentText.length > maxLength) {
            // Trim the content if it exceeds the limit
            divTitle.innerHTML = currentText.substring(0, maxLength);

            // Move the cursor to the end after trimming
            setCaretToEnd(divTitle);
        } else {
            const newTitle = event.target.innerHTML;
            console.log("Content changed: ", newTitle);
    
            note.title = newTitle;
    
            //update notes
            const notes = getAllNotes();
            const index = notes.findIndex(n => n.id == note.id);

            if (index !== -1) {
                notes[index] = note;
            }

            updateAllNotes(notes);
        }
    });

    //change in description
    divDescription.addEventListener('input', function(event) {
        const newDescription = event.target.innerHTML;
        console.log("Content changed: ", newDescription);

        note.description = newDescription;

        //update notes
        const notes = getAllNotes();
        const index = notes.findIndex(n => n.id == note.id);

        if (index !== -1) {
            notes[index] = note;
        }

        updateAllNotes(notes);
    }); 

    //functions
    // Helper function to set the caret to the end of the contentEditable div
    function setCaretToEnd(el) {
        const range = document.createRange();
        const selection = window.getSelection();
        range.selectNodeContents(el);
        range.collapse(false);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}
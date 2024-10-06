import {showNote} from './showNote.js';

// let noteContainer = document.getElementById("note-container");
let mainContent = document.getElementById("content-right");


/* <div id="content-right">
    <div id="note-container">
        <div class="note">
            <div id="note-title">
                Title
            </div>
            <div id="note-description">
                Notes desction
            </div>   */

        

export function makeNoteUI(note, notes, noteContainer) {

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
        notes = notes.filter(existingNote => note !== existingNote);
        showNote(notes);
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
            const index = notes.findIndex(n => n === note);
    
            if (index !== -1) {
                notes[index] = note;
            }
            console.log("Updated notes array:", notes);
        }
    });

    //change in description
    divDescription.addEventListener('input', function(event) {
        const newDescription = event.target.innerHTML;
        console.log("Content changed: ", newDescription);

        note.description = newDescription;

        //update notes
        const index = notes.findIndex(n => n === note);

        if (index !== -1) {
            notes[index] = note;
        }
        console.log("Updated notes array:", notes);
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
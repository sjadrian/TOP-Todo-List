import Note from "../../classes/Note.js";
import {showNote} from '../showNote.js';
import {getAllNotes, updateAllNotes} from "../showNote.js";

const addContent = document.getElementById("content-add-right");
const addModal = document.getElementById("modal-add");
const mainWindow = document.getElementById("main-content");


export default function showAddNote() {
    addContent.innerHTML = "";

    // Create the main container div (note-container-add)
    let noteContainerDiv = document.createElement("div");
    noteContainerDiv.id = "note-container-add";

    // Create the form element (note-add-form)
    let formElement = document.createElement("form");
    formElement.id = "note-add-form";
    formElement.action = "";

    // Create the input element for the note title
    let titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "title-note-add";
    titleInput.name = "title";
    titleInput.placeholder = "Title:";
    titleInput.required = true;
    titleInput.maxLength = 20;

    // Create the textarea element for the note description
    let descriptionTextarea = document.createElement("textarea");
    descriptionTextarea.id = "description-note-add";
    descriptionTextarea.name = "description";
    descriptionTextarea.rows = 4;
    descriptionTextarea.cols = 39;
    descriptionTextarea.placeholder = "Description:";

    // Create the confirm button (confirm-note-add)
    let confirmButton = document.createElement("button");
    confirmButton.id = "confirm-note-add";
    confirmButton.textContent = "Create Note";

    // Append the input, textarea, and button to the form
    formElement.appendChild(titleInput);
    formElement.appendChild(descriptionTextarea);
    formElement.appendChild(confirmButton);

    // Append the form to the container div
    noteContainerDiv.appendChild(formElement);

    // append notecontainer to the main body
    addContent.appendChild(noteContainerDiv);

    // confirm button 
    confirmButton.addEventListener('click',(event)=> {
        event.preventDefault();

        //get data
        let title = titleInput.value;
        let description = descriptionTextarea.value;

        //new notes
        let newNote = new Note(title, description);

        let allNotes = getAllNotes()

        allNotes.push(newNote);
        updateAllNotes(allNotes);

        // update UI
        showNote();
        closeAddModal();
    });
}
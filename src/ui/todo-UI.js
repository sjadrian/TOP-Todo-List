// src/ui/todo-UI.js

import {convertTime} from '../utils/dateUtils.js';
import {showHome} from './home.js';
import {updateToDosCountUI} from '../utils/countToDoUtils'

const moment = require("moment");

const low = "low";
const medium = "medium";
const high = "high";

const mainWindow = document.getElementById("main-content");

let mainContent = document.getElementById("content-right");

const detailModal = document.getElementById("modal");

const editModal = document.getElementById("modal-edit");

export function closeDetailsModal() {
    detailModal.classList.remove("open");
    mainWindow.classList.remove("blur");
}

export function closeEditModal() {
    editModal.classList.remove("open");
    mainWindow.classList.remove("blur");
}

export function makeToDoUI(todo, todos) {

    // create div & give class todo
    let div = document.createElement("div");
    div.classList.add("todo");

    //compononets
    //checkbox
    let checkBox = document.createElement("input");   
    checkBox.type="checkbox";
    checkBox.id= "checkbox1";
    checkBox.name = "checkbox";

    //title
    let divTitle = document.createElement("div");
    divTitle.id = "todo-title";
    divTitle.innerHTML = todo.title;

    //details-button
    let detailsButton = document.createElement("button");
    detailsButton.innerHTML = "Details";
    detailsButton.id = "detail-button";

    //date
    let divDate = document.createElement("div");
    divDate.id = "todo-date";
    divDate.innerHTML = convertTime(todo.date);

    //edit icon
    let editIcon = document.createElement("i");
    editIcon.classList.add("fa-regular", "fa-pen-to-square");
    editIcon.id = "todo-edit";

    //delete icon
    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-regular", "fa-trash-can");
    deleteIcon.id = "todo-delete";

    //add everything to parent-div
    div.appendChild(checkBox);
    div.appendChild(divTitle);
    div.appendChild(detailsButton);
    div.appendChild(divDate);
    div.appendChild(editIcon);
    div.appendChild(deleteIcon);

    mainContent.appendChild(div);

    //update UI
    //border priority 
    switch(todo.priority) {
        case low: 
            div.style.borderLeftColor = "green";
            break;
        case medium: 
            div.style.borderLeftColor = "orange";
            break;
        case high: 
            div.style.borderLeftColor = "red";
            break;
    }

    //check if task is done
    if (todo.completed == true) {
        checkBox.checked = true;
        divTitle.classList.add("todo-cross");
        div.classList.add("todo-background");
    }

    // give buttons functionalities

    checkBox.addEventListener("click", function() {
        updateUICheckBox(checkBox, todo, divTitle, div)
    });

    detailsButton.addEventListener("click", function() {
        showDetailsModalUI();
    });

    editIcon.addEventListener("click", ()=> {
        //put the old info to the modal edit UI and open the UI
        populateEditForm(todo);
        openEditModal();

        const confirmButton = document.getElementById("confirm-edit");

        // remove any existing event listener on the confirm button to avoid duplication
        const confirmEditHandler = (event) => {
            event.preventDefault();


            const updatedTodo = getUpdatedToDoValues();

            // Update the current todo
            updateToDoInArray(todo, updatedTodo);

            //update UI
            showHome(todos); 
            closeEditModal();
        };
        // Remove any previous listener before adding the new one
        confirmButton.removeEventListener('click', confirmButton._handler || (() => {}));
        confirmButton._handler = confirmEditHandler; // Store reference to the handler
        confirmButton.addEventListener("click", confirmEditHandler);
    });

    deleteIcon.addEventListener('click', ()=> {
        // remove todo from array
        console.log("delete called -> logging allTodos");
        console.log(todos);

        todos = todos.filter(allTodo => todo !== allTodo);
        // update UI

        console.log("delete finish -> logging allTodos");
        console.log(todos);

        showHome(todos); 
    });

    //functions
    function findIndexToDo(todoNeeded) {
        let count = 0;
        for (let todo of todos) {
            if (todo === todoNeeded) {
                console.log(count);
                return count; // Return the index as soon as a match is found
            }
            count++;
        }
        return -1; // Return -1 if no match is found
    }
    

    function updateUICheckBox(checkBox, todo, divTitle, div) {
        // Check if the checkbox is checked or unchecked
        if (checkBox.checked) {
            console.log("Checkbox is checked");
            // Add actions when checkbox is checked
            todo.completed = true;
    
            //add cross
            divTitle.classList.add("todo-cross");
            div.classList.add("todo-background");
    
            updateToDosCountUI(todos);
        } else {
            console.log("Checkbox is unchecked");
            // Add actions when checkbox is unchecked
            todo.completed = false;
    
            //remove cross
            divTitle.classList.remove("todo-cross");
            div.classList.remove("todo-background");
    
            updateToDosCountUI(todos);
        }
    }

    function showDetailsModalUI() {
        let title = document.getElementById("modal-title");
        let detail = document.getElementById("modal-detail");
        let priority = document.getElementById("modal-priority");

        title.innerHTML = todo.title;
        detail.innerHTML = todo.description;
        priority.innerHTML = todo.priority;

        openDetailsModal()
    }

    function openDetailsModal() {
        detailModal.classList.add("open");
        mainWindow.classList.add("blur");
    }

    function openEditModal() {
        editModal.classList.add("open");
        mainWindow.classList.add("blur");
    }

    function populateEditForm(todo) {
        // get form elements
        const titleInput = document.getElementById('title-edit');
        const descriptionInput = document.getElementById('description-edit');
        const dateInput = document.getElementById('birthday');
        const priorityInputs = document.getElementsByName('priority');

        // Populate the form fields with todo's values
        titleInput.value = todo.title;
        descriptionInput.value = todo.description;
        dateInput.value = moment(todo.date).format('YYYY-MM-DD');

        // Set the selected priority radio button
        priorityInputs.forEach((radio) => {
            radio.checked = todo.priority === radio.value;
        });
    }

    function getUpdatedToDoValues() {
        const titleInput = document.getElementById('title-edit');
        const descriptionInput = document.getElementById('description-edit');
        const dateInput = document.getElementById('birthday');
        const priorityInputs = document.getElementsByName('priority');
    
        // Extract values from the form
        const title = titleInput.value;
        const description = descriptionInput.value;
        const date = new Date(dateInput.value);
        let priority;
    
        // Get selected priority
        priorityInputs.forEach((radio) => {
            if (radio.checked) {
                priority = radio.value;
            }
        });
    
        // Return the updated todo values
        return { title, description, date, priority };
    };

    function updateToDoInArray(originalTodo, updatedTodo) {
        const index = findIndexToDo(originalTodo);

        if (index > -1) {
            // Update only the fields that were modified
            todos[index].title = updatedTodo.title;
            todos[index].description = updatedTodo.description;
            todos[index].date = updatedTodo.date;
            todos[index].priority = updatedTodo.priority;
        }
    }
}
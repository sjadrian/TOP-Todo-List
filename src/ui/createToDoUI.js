// src/ui/todo-UI.js

import {convertTime} from '../utils/dateUtils.js';
import {showHome} from './showHome.js';
import {updateToDosCountUI} from '../utils/countToDoUtils.js'
import { getAllTodos, updateAllTodos } from './showHome.js';
import { openDetailsModal, openEditModal, closeEditModal} from './modals.js';

const moment = require("moment");

const low = "low";
const medium = "medium";
const high = "high";

const mainContent = document.getElementById("content-right");


export function makeToDoUI(todo) {
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

    deleteIcon.addEventListener('click', ()=> {
        // remove todo from array
        let allTodos = getAllTodos();
        let filteredToDos = allTodos.filter(todoFromallTodos => todo.id !== todoFromallTodos.id);

        updateAllTodos(filteredToDos);
        showHome(); 
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
            showHome(); 
            closeEditModal();
        };
        // Remove any previous listener before adding the new one
        confirmButton.removeEventListener('click', confirmButton._handler || (() => {}));
        confirmButton._handler = confirmEditHandler; // Store reference to the handler
        confirmButton.addEventListener("click", confirmEditHandler);
    });

    //functions
    function findIndexToDo(todoNeeded) {
        let count = 0;

        let allTodos = getAllTodos();

        for (let todo of allTodos) {
            if (todo.id === todoNeeded.id) {
                return count;
            }
            count++;
        }
        return -1; 
    }
    

    function updateUICheckBox(checkBox, todo, divTitle, div) {
        // Determine the checked state and update the UI accordingly
        const isChecked = checkBox.checked;

        // Apply or remove styling for a completed todo
        if (isChecked) {
            divTitle.classList.add("todo-cross");
            div.classList.add("todo-background");
        } else {
            divTitle.classList.remove("todo-cross");
            div.classList.remove("todo-background");
        }

        // Update the todo item
        const index = findIndexToDo(todo);
        const todos = getAllTodos();

        if (index > -1) {
            // Update the `completed` status and save to `localStorage`
            todos[index].completed = isChecked;
            updateAllTodos(todos);

            // Update the ToDo count in the UI
            updateToDosCountUI();
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
        console.log('idx', index);

        const todos = getAllTodos();

        if (index > -1) {
             // Update the specific todo by index
            todos[index].title = updatedTodo.title;
            todos[index].description = updatedTodo.description;
            todos[index].date = updatedTodo.date;
            todos[index].priority = updatedTodo.priority;

            updateAllTodos(todos);
        }
    }
}
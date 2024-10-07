import {convertTime} from '../utils/dateUtils.js';
import {updateTotalProjectCountUI} from '../utils/countToDoInProjectUtils.js';
import {displayProjectUI} from './project.js';

import { allProjects } from '../data/store.js';

import { getAllProjects, updateAllProjects } from './project.js';

const moment = require("moment");

let homeButton = document.getElementById("home-button");
let todayButton = document.getElementById("today-button");
let weekButton = document.getElementById("week-button");

const mainWindow = document.getElementById("main-content");

let mainContent = document.getElementById("content-right");
let projectContainer = document.getElementById("project-container");

let homeToDoCount = document.getElementById("home-count");
let todayToDoCount = document.getElementById("today-count");
let weekToDoCount = document.getElementById("week-count");

const closeDetailButton = document.getElementById("closeModal");
const detailModal = document.getElementById("modal");

const editModal = document.getElementById("modal-edit");
const closeEditButton = document.getElementById("closeModal-edit");

const low = "low";
const medium = "medium";
const high = "high";


function closeEditModal() {
    editModal.classList.remove("open");
    mainWindow.classList.remove("blur");
}

export function makeProjectUI(todo, project) {
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

    //functions
    checkBox.addEventListener("click", function() {
        updateProjectUICheckBox(checkBox, todo, divTitle, div)
    });

    detailsButton.addEventListener("click", function() {
        showDetailsModalUI();
    });

    deleteIcon.addEventListener('click', ()=> {

        let projects = getAllProjects();
        let projectIndex = findIndexProject(project);
        console.log('prjIndex', projectIndex);
        console.log('todo-id-tobe-deleted', todo.id);


        let filteredTodos = projects[projectIndex].todos.filter(existingTodo => {
            console.log('todo id:');
            console.log(existingTodo.id);
            return todo.id !== existingTodo.id;
        });

        projects[projectIndex].todos = filteredTodos;
        
        console.log('filetered', filteredTodos);
        
        console.log('projects:', projects);

        updateAllProjects(projects);
        displayProjectUI(projects[projectIndex]);
        updateTotalProjectCountUI();
    });

    // works
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
            updateToDoInProjectArray(todo, updatedTodo);

            let projIndex = findIndexProject(project);

            //update UI
            displayProjectUI(getAllProjects()[projIndex]);
            closeEditModal();
        };

        // Remove any previous listener before adding the new one
        confirmButton.removeEventListener('click', confirmButton._handler || (() => {}));
        confirmButton._handler = confirmEditHandler; // Store reference to the handler
        confirmButton.addEventListener("click", confirmEditHandler);
    });

    //functions
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

    function populateEditForm(todoPopulate) {
        // get form elements
        const titleInput = document.getElementById('title-edit');
        const descriptionInput = document.getElementById('description-edit');
        const dateInput = document.getElementById('birthday');
        const priorityInputs = document.getElementsByName('priority');

        // Populate the form fields with todo's values
        titleInput.value = todoPopulate.title;
        descriptionInput.value = todoPopulate.description;
        dateInput.value = moment(todoPopulate.date).format('YYYY-MM-DD');

        // Set the selected priority radio button
        priorityInputs.forEach((radio) => {
            radio.checked = todoPopulate.priority === radio.value;
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

    function findIndexProject(projectSearched) {
        let count = 0;
        for (let projectInProjects of getAllProjects()) {
            if (projectInProjects.id === projectSearched.id) {
                console.log(count);
                return count; 
            }
            count++;
        }
        return -1;
    }

    function findIndexToDoInProject(todoNeeded, projectTodos) {
        let count = 0;
        for (let todox of projectTodos) {
            if (todox.id === todoNeeded.id) {
                console.log(count);
                return count;
            }
            count++;
        }
        return -1;
    }

    function updateToDoInProjectArray(originalTodo, updatedTodo) {
        const projectIndex = findIndexProject(project);
        const todoIndex = findIndexToDoInProject(originalTodo, project.todos);

        console.log('projectIndex', projectIndex);
        console.log('todoIndex', todoIndex);


        let projects = getAllProjects();

        if (todoIndex > -1 && projectIndex > -1) {
            // Update only the fields that were modified
            projects[projectIndex].todos[todoIndex].title = updatedTodo.title;
            projects[projectIndex].todos[todoIndex].description = updatedTodo.description;
            projects[projectIndex].todos[todoIndex].date = updatedTodo.date;
            projects[projectIndex].todos[todoIndex].priority = updatedTodo.priority;

            updateAllProjects(projects);
        }
    }

    function updateProjectUICheckBox(checkBox, todo_, divTitle, div) {
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
        console.log('project.todo', project.todos);
        const index = findIndexToDoInProject(todo_, project.todos);
        const projectIndex = findIndexProject(project);
        const projects = getAllProjects();

        if (index > -1) {
            projects[projectIndex].todos[index].completed = isChecked;
            updateAllProjects(projects);
            updateTotalProjectCountUI();
        }
    }
}


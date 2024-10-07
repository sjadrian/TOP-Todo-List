import ToDo from "../../classes/ToDo";
import { showHome } from "../home";
// import { allTodos } from "../../data/store";
// import {changeActiveTabAdd} from '../changeActiveTab.js';

const addContent = document.getElementById("content-add-right");
const addModal = document.getElementById("modal-add");
const mainWindow = document.getElementById("main-content");

import {changeActiveTabAdd} from '../changeActiveTab.js';

const todoAdd = document.getElementById("todo-add");
const projectAdd = document.getElementById("project-add");
const projectTodoAdd = document.getElementById("project-todo-add");
const noteAdd = document.getElementById("note-add");

import { getAllTodos, updateAllTodos } from "../home";

function closeAddModal() {
    addModal.classList.remove("open");
    mainWindow.classList.remove("blur");
}



export default function showAddToDo() {
    addContent.innerHTML = "";

    // changeActiveTabAdd(todoAdd);

    let divContainer = document.createElement("div");
    divContainer.id = "todo-container-add";

    let formAction = document.createElement("form");
    formAction.id = "todo-add-form";
    formAction.action = "";

    let titleAdd = document.createElement("input");
    titleAdd.setAttribute("type", "text");
    titleAdd.setAttribute("id", "title-todo-add");
    titleAdd.setAttribute("name", "title");
    titleAdd.setAttribute("placeholder", "Title:");
    titleAdd.setAttribute("required", true);
    titleAdd.setAttribute("maxlength", "20");

    let descriptionAdd = document.createElement("textarea");
    descriptionAdd.setAttribute("id", "description-todo-add");
    descriptionAdd.setAttribute("name", "description");
    descriptionAdd.setAttribute("rows", "4");
    descriptionAdd.setAttribute("cols", "39");
    descriptionAdd.setAttribute("placeholder", "Description: ");

    let divDueDate = document.createElement("div");
    divDueDate.id = "duedate-todo-add";

    let boldElement = document.createElement("b");
    boldElement.textContent = "Due Date: ";

    let dueDateAdd = document.createElement("input");
    dueDateAdd.type = "date";
    dueDateAdd.id = "date-todo-add";
    dueDateAdd.name = "date-add";
    dueDateAdd.required = true;

    divDueDate.appendChild(boldElement);
    divDueDate.appendChild(dueDateAdd);

    //priority and button
    // Create the main div (last-row-todo-add)
    let lastRowDiv = document.createElement("div");
    lastRowDiv.id = "last-row-todo-add";

    // Create the priority div (priority-todo-add)
    let priorityDiv = document.createElement("div");
    priorityDiv.id = "priority-todo-add";

    // Create and append the bold element for 'Priority:'
    let priorityLabel = document.createElement("b");
    priorityLabel.textContent = "Priority:";
    priorityDiv.appendChild(priorityLabel);

    // Low Priority Radio Button and Label
    let lowPriorityInput = document.createElement("input");
    lowPriorityInput.type = "radio";
    lowPriorityInput.id = "priorityLow-todo";
    lowPriorityInput.name = "priority-todo";
    lowPriorityInput.value = "low";

    let lowPriorityLabel = document.createElement("label");
    lowPriorityLabel.setAttribute("for", "priorityLow-todo");
    lowPriorityLabel.textContent = "Low";

    // Medium Priority Radio Button and Label
    let medPriorityInput = document.createElement("input");
    medPriorityInput.type = "radio";
    medPriorityInput.id = "priorityMed-todo";
    medPriorityInput.name = "priority-todo";
    medPriorityInput.value = "medium";

    let medPriorityLabel = document.createElement("label");
    medPriorityLabel.setAttribute("for", "priorityMed-todo");
    medPriorityLabel.textContent = "Medium";

    // High Priority Radio Button and Label
    let highPriorityInput = document.createElement("input");
    highPriorityInput.type = "radio";
    highPriorityInput.id = "priorityHigh-todo";
    highPriorityInput.name = "priority-todo";
    highPriorityInput.value = "high";

    let highPriorityLabel = document.createElement("label");
    highPriorityLabel.setAttribute("for", "priorityHigh-todo");
    highPriorityLabel.textContent = "High";

    // Append radio buttons and labels to the priority div
    priorityDiv.appendChild(lowPriorityInput);
    priorityDiv.appendChild(lowPriorityLabel);
    priorityDiv.appendChild(medPriorityInput);
    priorityDiv.appendChild(medPriorityLabel);
    priorityDiv.appendChild(highPriorityInput);
    priorityDiv.appendChild(highPriorityLabel);

    // Create and append the button (confirm-todo-add)
    let confirmButton = document.createElement("button");
    confirmButton.id = "confirm-todo-add";
    confirmButton.textContent = "Add To Do";

    // Append the priority div and button to the last row div
    lastRowDiv.appendChild(priorityDiv);
    lastRowDiv.appendChild(confirmButton);    

    // Append the div to the body or any other container
    formAction.appendChild(titleAdd);
    formAction.appendChild(descriptionAdd);
    formAction.appendChild(divDueDate);
    formAction.appendChild(lastRowDiv);


    divContainer.appendChild(formAction);

    addContent.appendChild(divContainer);

    confirmButton.addEventListener('click', (event)=> {

        console.log("confirm todo");

        event.preventDefault();

        //get data
        let title = titleAdd.value;
        let description = descriptionAdd.value;
        let dueDate = new Date(dueDateAdd.value);
        let priority;

        const priorityInputs = document.getElementsByName('priority-todo');

        priorityInputs.forEach((radio) => {
            if (radio.checked) {
                priority = radio.value;
            }
        });

        //new todo
        const newTodo = new ToDo(title, description, new Date(dueDate), priority);

        //add todo to alltodo
        // allTodos.add(newTodo);

        let allTodos = getAllTodos();
        allTodos.push(newTodo);

        updateAllTodos(allTodos);

        // show new todo
        showHome();

        //close dialog
        closeAddModal();
    });
} 
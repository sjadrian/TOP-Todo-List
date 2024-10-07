// /src/index.js
import "./styles.css";

import { initializeData, allTodos, allProjects, allNotes } from './data/store.js';
import {closeDetailsModal,  closeEditModal, makeToDoUI} from './ui/todo-UI.js';
import {showHome} from './ui/home.js';
import {showToday} from './ui/today.js';
import { showWeek } from "./ui/week.js";
import {showProject} from './ui/project.js';
import {showNote} from './ui/showNote.js';
import showAddNote from "./ui/add/note.js";
import showAddToDo from "./ui/add/todo.js";
import showAddProject from "./ui/add/project.js";
import showAddProjectTodo from "./ui/add/project-todo.js";

// import changeActiveTab from "./ui/changeActiveTab.js";

const moment = require("moment");

const low = "low";
const medium = "medium";
const high = "high";

let homeButton = document.getElementById("home-button");
let todayButton = document.getElementById("today-button");
let weekButton = document.getElementById("week-button");
let noteButton = document.getElementById("note-button");

const mainWindow = document.getElementById("main-content");

const closeDetailButton = document.getElementById("closeModal");
const closeEditButton = document.getElementById("closeModal-edit");

const addModal = document.getElementById("modal-add");
const addButton = document.getElementById("add-button");

const closeAddButton = document.getElementById("closeModal-add");


const todoAdd = document.getElementById("todo-add");
const projectAdd = document.getElementById("project-add");
const projectTodoAdd = document.getElementById("project-todo-add");
const noteAdd = document.getElementById("note-add");

// initialize data
initializeData();

// initialize UI
showHome();
// showProject();
// showNote();

closeDetailButton.addEventListener("click", ()=> {
    closeDetailsModal();
});

closeEditButton.addEventListener("click", (event)=> {
    event.preventDefault();
    closeEditModal();
});

homeButton.addEventListener('click', function () {
    console.log("homeButton called -> logging allTodos");
    console.log(allTodos);

    showHome();
})

todayButton.addEventListener('click', function () {
    showToday();
})

weekButton.addEventListener('click', function () {
    showWeek();
})

noteButton.addEventListener('click', function() {
    showNote();
});


// add stuff
closeAddButton.addEventListener('click', (event)=> {
    event.preventDefault();
    addModal.classList.remove("open");
    mainWindow.classList.remove("blur");
});

addButton.addEventListener('click', function() {
    showAddModal();
    showAddToDo();
});

function showAddModal() {
    addModal.classList.add("open");
    mainWindow.classList.add("blur");
}

function closeAddModal() {
    addModal.classList.remove("open");
    mainWindow.classList.remove("blur");
}

todoAdd.addEventListener('click', ()=> {
    console.log("todo add called");
    showAddToDo();
});

projectAdd.addEventListener('click', ()=> {
    console.log("project add called");
    showAddProject();
})

projectTodoAdd.addEventListener('click', ()=> {
    console.log("project todo add called");
    showAddProjectTodo(); 
})

noteAdd.addEventListener('click', ()=> {
    console.log("note add called");
    showAddNote();
})

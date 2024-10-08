// /src/index.js
import "./styles.css";

import { initializeData} from './data/store.js';
import {showHome} from './ui/showHome.js';
import {showToday} from './ui/showToday.js';
import {showWeek} from "./ui/showWeek.js";
import {showProject} from './ui/showProject.js';
import {showNote} from './ui/showNote.js';
import showAddNote from "./ui/add/showAddNote.js";
import showAddToDo from "./ui/add/showAddToDo.js";
import showAddProject from "./ui/add/showAddProject.js";
import showAddProjectTodo from "./ui/add/showAddProjectToDo.js";

let homeButton = document.getElementById("home-button");
let todayButton = document.getElementById("today-button");
let weekButton = document.getElementById("week-button");
let noteButton = document.getElementById("note-button");


const closeDetailButton = document.getElementById("closeModal");
const closeEditButton = document.getElementById("closeModal-edit");

const addButton = document.getElementById("add-button");

const closeAddButton = document.getElementById("closeModal-add");

const todoAdd = document.getElementById("todo-add");
const projectAdd = document.getElementById("project-add");
const projectTodoAdd = document.getElementById("project-todo-add");
const noteAdd = document.getElementById("note-add");

import { closeDetailsModal, closeEditModal, closeAddModal, openAddModal } from "./ui/modals.js";

// initialize data
initializeData();

// initialize UI
showHome();
showProject();

closeDetailButton.addEventListener("click", ()=> {
    closeDetailsModal();
});

closeEditButton.addEventListener("click", (event)=> {
    event.preventDefault();
    closeEditModal();
});

// add stuff
closeAddButton.addEventListener('click', (event)=> {
    event.preventDefault();
    closeAddModal();
});

homeButton.addEventListener('click', function () {
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

addButton.addEventListener('click', function() {
    openAddModal();
    showAddToDo();
});

todoAdd.addEventListener('click', ()=> {
    showAddToDo();
});

projectAdd.addEventListener('click', ()=> {
    showAddProject();
})

projectTodoAdd.addEventListener('click', ()=> {
    showAddProjectTodo(); 
})

noteAdd.addEventListener('click', ()=> {
    showAddNote();
})

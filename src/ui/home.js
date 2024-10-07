// src/ui/home.js
import { initializeData, allTodos, allProjects, allNotes } from '../data/store.js';
import {updateToDosCountUI, sortToDo} from '../utils/countToDoUtils'
import {makeToDoUI} from './todo-UI';

import ToDo from '../classes/ToDo.js';

let homeButton = document.getElementById("home-button");
let todayButton = document.getElementById("today-button");
let weekButton = document.getElementById("week-button");

import {changeActiveTab} from './changeActiveTab.js';

let mainContent = document.getElementById("content-right");

export function showHome() {
    // console.log("showHome called -> logging allTodos");
    // console.log(allTodos);
    

    // console.log(homeButton);
    // changeActiveTab(homeButton);

    //clear home
    mainContent.innerHTML = '';

    const localToDos = getAllTodos();
    console.log('localtds', localToDos);

    localToDos.forEach((todo)=> makeToDoUI(todo));
    updateToDosCountUI();
}


// export function getAllTodos() {
//     let localTodosData = JSON.parse(localStorage.getItem('allTodos'));
//     const localTodos = localTodosData.map(todoData => ToDo.fromJSON(todoData));
//     return localTodos;
// }

export function getAllTodos() {
    console.log('todo data:');
    let localTodosData = JSON.parse(localStorage.getItem('allTodos') || '[]'); // Provide a default empty array to avoid errors if 'allTodos' is null
    const localTodos = localTodosData.map((todoData) => {
        console.log(todoData);
        return ToDo.fromJSON(todoData); // Ensure the result of fromJSON is returned
    });
    return localTodos;
}

export function updateAllTodos(newTodos) {
    console.log('updateAllTodos called:');
    console.log(newTodos);
    let newTodosData = JSON.stringify(newTodos);
    localStorage.setItem('allTodos', newTodosData);
    console.log(getAllTodos());
}
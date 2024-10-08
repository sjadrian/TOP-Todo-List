// src/ui/home.js
import {updateToDosCountUI, sortToDo} from '../utils/countToDoUtils.js'
import {makeToDoUI} from './createToDoUI.js';
import ToDo from '../classes/ToDo.js';

let mainContent = document.getElementById("content-right");


export function showHome() {
    //clear home
    mainContent.innerHTML = '';

    sortToDo();
    const localToDos = getAllTodos();

    localToDos.forEach((todo)=> makeToDoUI(todo));
    updateToDosCountUI();
}


export function getAllTodos() {
    let localTodosData = JSON.parse(localStorage.getItem('allTodos') || '[]'); // Provide a default empty array to avoid errors if 'allTodos' is null
    const localTodos = localTodosData.map((todoData) => {
        return ToDo.fromJSON(todoData); // Ensure the result of fromJSON is returned
    });
    return localTodos;
}


export function updateAllTodos(newTodos) {
    console.log(newTodos);
    let newTodosData = JSON.stringify(newTodos);
    localStorage.setItem('allTodos', newTodosData);
}
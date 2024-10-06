// src/ui/home.js

import {updateToDosCountUI, sortToDo} from '../utils/countToDoUtils'
import {makeToDoUI} from './todo-UI';

let mainContent = document.getElementById("content-right");

export function showHome(todos) {
    console.log("showHome called -> logging allTodos");
    console.log(todos);
    
    //clear home
    mainContent.innerHTML = '';

    if(todos.length >= 2) {
        todos = sortToDo(todos);
    }

    todos.forEach((todo)=> makeToDoUI(todo, todos));
    updateToDosCountUI(todos);
}
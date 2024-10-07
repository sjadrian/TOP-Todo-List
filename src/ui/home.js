// src/ui/home.js
import { initializeData, allTodos, allProjects, allNotes } from '../data/store.js';
import {updateToDosCountUI, sortToDo} from '../utils/countToDoUtils'
import {makeToDoUI} from './todo-UI';

let homeButton = document.getElementById("home-button");
let todayButton = document.getElementById("today-button");
let weekButton = document.getElementById("week-button");

import {changeActiveTab} from './changeActiveTab.js';

let mainContent = document.getElementById("content-right");

export function showHome() {
    console.log("showHome called -> logging allTodos");
    console.log(allTodos);
    

    console.log(homeButton);
    changeActiveTab(homeButton);

    //clear home
    mainContent.innerHTML = '';


    allTodos.get().forEach((todo)=> makeToDoUI(todo));
    updateToDosCountUI();
}

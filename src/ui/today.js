import {showTodayToDo, sortToDo} from '../utils/countToDoUtils'
import {changeActiveTab} from './changeActiveTab';
import {makeToDoUI} from './todo-UI';

let mainContent = document.getElementById("content-right");

let homeButton = document.getElementById("home-button");
let todayButton = document.getElementById("today-button");
let weekButton = document.getElementById("week-button");

export function showToday() {
    //clear home
    mainContent.innerHTML = '';

    // changeActiveTab(todayButton);

    let todayToDos = showTodayToDo();
    todayToDos.forEach((todo)=> makeToDoUI(todo));
}
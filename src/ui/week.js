import {showThisWeekToDo, sortToDo} from '../utils/countToDoUtils'
import {makeToDoUI} from '../ui/todo-UI';

let mainContent = document.getElementById("content-right");

let homeButton = document.getElementById("home-button");
let todayButton = document.getElementById("today-button");
let weekButton = document.getElementById("week-button");

import {changeActiveTab} from './changeActiveTab';

export function showWeek() {
    //clear home
    mainContent.innerHTML = '';

    changeActiveTab(weekButton);

    let weekToDos = showThisWeekToDo();
    weekToDos.forEach((todo)=> makeToDoUI(todo));
}
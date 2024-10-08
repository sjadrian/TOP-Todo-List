import {showTodayToDo} from '../utils/countToDoUtils'
import {makeToDoUI} from './createToDoUI';

let mainContent = document.getElementById("content-right");


export function showToday() {
    //clear home
    mainContent.innerHTML = '';

    // changeActiveTab(todayButton);
    let todayToDos = showTodayToDo();
    todayToDos.forEach((todo)=> makeToDoUI(todo));
}
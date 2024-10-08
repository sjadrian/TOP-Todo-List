import {showThisWeekToDo, sortToDo} from '../utils/countToDoUtils'
import {makeToDoUI} from './createToDoUI';

let mainContent = document.getElementById("content-right");


export function showWeek() {
    //clear home
    mainContent.innerHTML = '';

    let weekToDos = showThisWeekToDo();
    weekToDos.forEach((todo)=> makeToDoUI(todo));
}
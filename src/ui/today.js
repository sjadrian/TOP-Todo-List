import {showTodayToDo, sortToDo} from '../utils/countToDoUtils'
import {makeToDoUI} from './todo-UI';

let mainContent = document.getElementById("content-right");

export function showToday(todoArray) {
    //clear home
    mainContent.innerHTML = '';

    todoArray = sortToDo(todoArray);

    let todayToDos = showTodayToDo(todoArray);
    todayToDos.forEach((todo)=> makeToDoUI(todo, todoArray));
}
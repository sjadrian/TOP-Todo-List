import {showThisWeekToDo, sortToDo} from '../utils/countToDoUtils'
import {makeToDoUI} from '../ui/todo-UI';

let mainContent = document.getElementById("content-right");

export function showWeek(todos) {
    //clear home
    mainContent.innerHTML = '';

    todos = sortToDo(todos);

    let weekToDos = showThisWeekToDo(todos);
    weekToDos.forEach((todo)=> makeToDoUI(todo, todos));
}
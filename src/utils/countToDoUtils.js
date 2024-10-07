// src/utils/countToDoUtils.js

// import { allTodos } from "../data/store";

let homeToDoCount = document.getElementById("home-count");
let todayToDoCount = document.getElementById("today-count");
let weekToDoCount = document.getElementById("week-count");

import { getAllTodos, updateAllTodos } from "../ui/home";

export function updateToDosCountUI() {
    updateTotalHome();
    updateTotalToday();
    updateTotalWeek();
}

function updateTotalHome() {

    // console.log('this called');

    let count = 0;
    getAllTodos().forEach(todo => {
        if (todo.completed == false) {
            count++;
        }
    });
    
    if (count == 0) {
        homeToDoCount.style.visibility = 'hidden';
    } else {
        homeToDoCount.style.visibility = 'visible';
        homeToDoCount.innerHTML = count;
    }

    console.log('count:', count);
}

function updateTotalToday() {
    let count = 0;
    let todayArray = showTodayToDo(getAllTodos()); 
    todayArray.forEach(todo => {
        if (todo.completed == false) {
            count++;
        }
    });
    if (count == 0) {
        todayToDoCount.style.visibility = 'hidden';
    } else {
        todayToDoCount.style.visibility = 'visible';
        todayToDoCount.innerHTML = count;
    }
}

function updateTotalWeek() {
    let count = 0;
    let weekArray = showThisWeekToDo();
    weekArray.forEach(todo => {
        if (todo.completed == false) {
            count++;
        }
    });
    if (count == 0) {
        weekToDoCount.style.visibility = 'hidden';
    } else {
        weekToDoCount.style.visibility = 'visible';
        weekToDoCount.innerHTML = count;
    }
}

export function showTodayToDo() {
    //initialize
    let returnArray = [];

    // get today's date
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDate = today.getDate();    

    // compare each's todo date with today's date
    getAllTodos().forEach((todo) => {
        // console.log(todo);
        // console.log(todo.date);
        // console.log(new Date(todo.date.getFullYear()))

        const todoYear = todo.date.getFullYear();
        const todoMonth = todo.date.getMonth();
        const todoDate = todo.date.getDate();

        // if match add to a list 
        if (todoYear == todayYear && todoMonth == todayMonth && todoDate == todayDate) {
            returnArray.push(todo);
        }
    });
    // return list
    return returnArray;
}

export function showThisWeekToDo() {
    //initialize
    let returnArray = [];
    const miliSecsInWeek = 6.048e+8;

    // get today's date
    let today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDate = today.getDate();      
    today = new Date(todayYear, todayMonth, todayDate);
    
    // compare each's todo date with today's date
    getAllTodos().forEach((todo) => {
        // console.log(todo);
        const timeDifferenceInMs = todo.date - today;

        // if match add to a list 
        if (timeDifferenceInMs <=  miliSecsInWeek && timeDifferenceInMs > 0) {
            // console.log(timeDifferenceInMs);
            returnArray.push(todo);
        }
    });
    // return list
    return returnArray;
}

// export function sortToDo(todos) {
//     return todos.sort((a, b) => {
//         return new Date(a.date) - new Date(b.date); // Ascending order
//     })
// }


export function sortToDo() {
    // Retrieve the todos array using the getter
    const todos = getAllTodos();

    // Check if todos is an array
    if (!Array.isArray(todos)) {
        console.error("sortToDo: Expected an array, but got:", todos);
        return;
    }

    // Sort the array without mutating the original
    const sortedTodos = [...todos].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        if (isNaN(dateA) || isNaN(dateB)) {
            console.error("Invalid date in one of the todos:", a, b);
            return 0;
        }

        return dateA - dateB;
    });

    // Store the sorted todos back into allTodos using the setter
    // allTodos.set(sortedTodos);
    updateAllTodos(sortedTodos);
    
}
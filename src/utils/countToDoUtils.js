// src/utils/countToDoUtils.js

let homeToDoCount = document.getElementById("home-count");
let todayToDoCount = document.getElementById("today-count");
let weekToDoCount = document.getElementById("week-count");

export function updateToDosCountUI(todoArray) {
    updateTotalHome(todoArray);
    updateTotalToday(todoArray);
    updateTotalWeek(todoArray);
}

function updateTotalHome(todoArray) {
    let count = 0;
    todoArray.forEach(todo => {
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
}

function updateTotalToday(todoArray) {
    let count = 0;
    let todayArray = showTodayToDo(todoArray); 
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

function updateTotalWeek(todoArray) {
    let count = 0;
    let weekArray = showThisWeekToDo(todoArray);
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

export function showTodayToDo(todoArray) {
    //initialize
    let returnArray = [];

    // get today's date
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDate = today.getDate();    

    // compare each's todo date with today's date
    todoArray.forEach((todo) => {
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

export function showThisWeekToDo(todoArray) {
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
    todoArray.forEach((todo) => {
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

export function sortToDo(todos) {
    return todos.sort((a, b) => {
        return new Date(a.date) - new Date(b.date); // Ascending order
    })
}
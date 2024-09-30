import "./styles.css";

console.log("hello");

let notes = [];
let allTodos = [];

class Note {
    constructor(title, description) {
        this._title = title;
        this._description = description;
    }

    set title(newTitle) {
        console.log("setting title");
        this._title = newTitle;
    }

    get title() {
        return this._title;
    }

    set description(newDescription) {
        console.log("setting description");
        this._description = newDescription;
    }

    get description() {
        return this._description;
    }
}
// note testing
// const title1 = "shopping list 1"; 
// const description1 = "1 egg";

// let note1 =  new Note(title1, description1);
// console.log(note1)
// console.log(note1.title)
// console.log(note1.description)

// const title2 = "shopping list 2"; 
// const description2 = "2 egg";

// note1.title = title2;
// note1.description = description2;

// console.log(note1)
// console.log(note1.title)
// console.log(note1.description)


class ToDo extends Note {
    constructor(title, description, date, priority) {
        super(title, description);
        this._date = date;
        this._priority = priority;
    }

    set date(newDate) {
        console.log("setting date");
        this._date = newDate;
    }

    get date() {
        return this._date;
    }

    set priority(newPriority) {
        console.log("setting prio");
        this._priority = newPriority;
    }

    get priority() {
        return this._priority;
    }
}


class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }

    addTodo(ToDo) {
        this.todos.push(ToDo);
    };

    removeToDo(ToDo) {
        this.todos = this.todos.filter(todo => todo !== ToDo);
    }
}


function showTodayToDo() {
    //initialize
    let toDoArray = [];

    // get today's date
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDate = today.getDate();    

    // compare each's todo date with today's date
    allTodos.forEach((todo) => {
        const todoYear = todo.date.getFullYear();
        const todoMonth = todo.date.getMonth();
        const todoDate = todo.date.getDate();

        // if match add to a list 
        if (todoYear == todayYear && todoMonth == todayMonth && todoDate == todayDate) {
            toDoArray.push(todo);
        }
    });
    // return list
    return toDoArray;
}
//testing showTodayToDo
// const title = "shopping list 1"; 
// const description = "1 egg";
// const date = new Date("2024-09-30");
// const priority = "low"

// const title2 = "shopping list 2"; 
// const date2 = new Date("2024-10-30");


// let todo1 =  new ToDo(title, description, date, priority);
// let todo2 =  new ToDo(title2, description, date2, priority);
// console.log(todo1);
// console.log(todo2);

// allTodos.push(todo1);
// allTodos.push(todo2);

// let todayTodos = showTodayToDo();
// console.log(todayTodos);


function showThisWeekToDo() {
    //initialize
    let toDoArray = [];
    const miliSecsInWeek = 6.048e+8;

    // get today's date
    let today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDate = today.getDate();      
    today = new Date(todayYear, todayMonth, todayDate);
    
    // compare each's todo date with today's date
    allTodos.forEach((todo) => {
        console.log(todo);
        const timeDifferenceInMs = todo.date - today;

        // if match add to a list 
        if (timeDifferenceInMs <=  miliSecsInWeek && timeDifferenceInMs > 0) {
            console.log(timeDifferenceInMs);
            toDoArray.push(todo);
        }
    });
    // return list
    return toDoArray;
}

//testing showThisWeekToDo
// const title = "shopping list 1"; 
// const description = "1 egg";
// const date = new Date("2024-09-30");
// const priority = "low"

// const title2 = "shopping list 2"; 
// const date2 = new Date("2024-10-06");

// const title3 = "shopping list 3"; 
// const date3 = new Date("2024-10-10");

// const title4 = "shopping list 4"; 
// const date4 = new Date("2024-09-20");

// let todo1 =  new ToDo(title, description, date, priority);
// let todo2 =  new ToDo(title2, description, date2, priority);
// let todo3 =  new ToDo(title3, description, date3, priority);
// let todo4 =  new ToDo(title4, description, date4, priority);

// allTodos.push(todo1);
// allTodos.push(todo2);
// allTodos.push(todo3);
// allTodos.push(todo4);

// let weekTodos = showThisWeekToDo();
// console.log(weekTodos);

// /src/data/store.js
import ToDo from '../classes/ToDo.js';
import Project from '../classes/Project.js';
import Note from '../classes/Note.js';

// Internal state variables
let _allTodos = [];
let _allProjects = [];
let _allNotes = [];

let homeButton = document.getElementById("home-button");
let todayButton = document.getElementById("today-button");
let weekButton = document.getElementById("week-button");
let noteButton = document.getElementById("note-button");

let _allButtons = []

// add buttons
const todoAdd = document.getElementById("todo-add");
const projectAdd = document.getElementById("project-add");
const projectTodoAdd = document.getElementById("project-todo-add");
const noteAdd = document.getElementById("note-add");


let _allAddButtons = [];

// Load data from localStorage if available
function loadFromLocalStorage() {
  const todos = localStorage.getItem('allTodos');
  const projects = localStorage.getItem('allProjects');
  const notes = localStorage.getItem('allNotes');
  const buttons = localStorage.getItem('allButtons');
  const addButtons = localStorage.getItem('allAddButtons');

  _allTodos = todos ? JSON.parse(todos) : [];
  _allProjects = projects ? JSON.parse(projects) : [];
  _allNotes = notes ? JSON.parse(notes) : [];
  _allButtons = buttons ? JSON.parse(buttons) : [];
  _allAddButtons = addButtons ? JSON.parse(addButtons) : [];
}

// export function loadAllButtons() {
//   const buttons = localStorage.getItem('allButtons');
//   _allButtons = buttons ? JSON.parse(buttons) : [];
//   return _allButtons;
// }

// Save data to localStorage
function saveToLocalStorage() {
  localStorage.setItem('allTodos', JSON.stringify(_allTodos));
  localStorage.setItem('allProjects', JSON.stringify(_allProjects));
  localStorage.setItem('allNotes', JSON.stringify(_allNotes));
  localStorage.setItem('allButtons', JSON.stringify(_allButtons));
  localStorage.setItem('allAddButtons', JSON.stringify(_allAddButtons));
}

export const allAddButtons = {
  get() {
    return _allAddButtons;
  },
  set(newAddButtons) {
    _allAddButtons = newAddButtons;
    saveToLocalStorage();
  },
  add(button) {
    _allAddButtons.push(button);
    saveToLocalStorage();
  },
  remove(buttonToRemove) {
    _allAddButtons = _allAddButtons.filter(button => button !== buttonToRemove);
    saveToLocalStorage();
  }
};



export const allButtons = {
  get() {
    return _allButtons;
  },
  set(newButtons) {
    _allButtons = newButtons;
    saveToLocalStorage();
  },
  add(button) {
    _allButtons.push(button);
    saveToLocalStorage();
  },
  remove(buttonToRemove) {
    _allButtons = _allButtons.filter(button => button !== buttonToRemove);
    saveToLocalStorage();
  }
};

// Getter and Setter for allTodos
export const allTodos = {
  get() {
    return _allTodos;
  },
  set(newTodos) {
    _allTodos = newTodos;
    saveToLocalStorage();
  },
  add(todo) {
    _allTodos.push(todo);
    saveToLocalStorage();
  },
  remove(todoToRemove) {
    _allTodos = _allTodos.filter(todo => todo !== todoToRemove);
    saveToLocalStorage();
  }
};

// Getter and Setter for allProjects
export const allProjects = {
  get() {
    return _allProjects;
    saveToLocalStorage();
  },
  set(newProjects) {
    _allProjects = newProjects;
    saveToLocalStorage();
  },
  add(project) {
    _allProjects.push(project);
    saveToLocalStorage();
  }
};

// Getter and Setter for allNotes
export const allNotes = {
  get() {
    return _allNotes;
  },
  set(newNotes) {
    _allNotes = newNotes;
    saveToLocalStorage();
  },
  add(note) {
    _allNotes.unshift(note);
    saveToLocalStorage();
  }
};

// Initialize data
export function initializeData() {
  // localStorage.clear();
  loadFromLocalStorage();
  console.log('allNotesLength:', _allNotes.length);
  if (_allNotes.length == 0) {
    localStorage.clear();

    // If no data exists in localStorage, initialize with default data
    // const todo1 = new ToDo("shopping list 1", "1 egg", new Date("2024-09-30"), "low");
    // const todo2 = new ToDo("shopping list 2", "description2", new Date("2024-10-07"), "medium");
    // const todo3 = new ToDo("shopping list 3", "description3", new Date("2024-10-09"), "high");
    // const todo4 = new ToDo("shopping list 4", "description4", new Date("2024-11-20"), "low");

    // allTodos.add(todo1);
    // allTodos.add(todo2);
    // allTodos.add(todo3);
    // allTodos.add(todo4);

    // // Create projects
    // const project1 = new Project("Gym");
    // const project2 = new Project("Cook");
    // const project3 = new Project("Empty Project");

    // project1.addTodo(new ToDo("gym", "go-to-gym", new Date("2024-09-30"), "low"));
    // project1.addTodo(new ToDo("biking", "bike with Sam", new Date("2024-10-02"), "medium"));
    // project2.addTodo(new ToDo("cook", "cook-chicken", new Date("2024-09-30"), "high"));

    // allProjects.add(project1);
    // allProjects.add(project2);
    // allProjects.add(project3);

    // // Create notes
    const note1 = new Note("title", "you can edit title and details in place.");
    const note2 = new Note("books", "go get some books");
    const note3 = new Note("shopping list", "steak\ncheese\ntomatos\nsauce");
    const note5 = new Note("example note", "example\nnote\nwith\nlots\nof\nlines");
    const note8 = new Note("books", "go get some more books");

    // allNotes.add(note1);
    // allNotes.add(note2);
    // allNotes.add(note3);
    // allNotes.add(note5);
    // allNotes.add(note8);

    // allButtons.add(homeButton);
    // allButtons.add(todayButton);
    // allButtons.add(weekButton);
    // allButtons.add(noteButton);

    // allAddButtons.add(todoAdd);
    // allAddButtons.add(projectAdd);
    // allAddButtons.add(projectTodoAdd);
    // allAddButtons.add(noteAdd);

    _allNotes.push(note1, note2, note3, note5, note8);

    // let xxx = [];
    // xxx.push(note1);
    // xxx.push(note2);
    // console.log('xxx:', xxx);

    // let xxxItem = JSON.stringify(xxx)
    // console.log('xxxItem:', xxxItem);
    // localStorage.setItem('allNotes', xxxItem);

    // let xxxFromStorage = JSON.parse(localStorage.getItem('allNotes'));
    // console.log('xxxFromStorage:', xxxFromStorage);
    

    // console.log('_allNotes:' + _allNotes);

    saveToLocalStorage(); // Save initial data to localStorage


    //get note from local storage
    // let xNotesData = JSON.parse(localStorage.getItem("allNotes"));

    // // Map over each item and create a new Note instance
    // const xNotes = xNotesData.map(noteData => new Note(noteData._title, noteData._description));
    // console.log("xNotes:");
    // console.log(xNotes);

    // console.log("allNotes:");
    // console.log(allNotes.get());
  } else {
  }
}



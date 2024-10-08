// /src/data/store.js
import ToDo from '../classes/ToDo.js';
import Project from '../classes/Project.js';
import Note from '../classes/Note.js';

// Internal state variables
let _allTodos = [];
let _allProjects = [];
let _allNotes = [];
let _allButtons = []
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

// Save data to localStorage
function saveToLocalStorage() {
  localStorage.setItem('allTodos', JSON.stringify(_allTodos));
  localStorage.setItem('allProjects', JSON.stringify(_allProjects));
  localStorage.setItem('allNotes', JSON.stringify(_allNotes));
  localStorage.setItem('allButtons', JSON.stringify(_allButtons));
  localStorage.setItem('allAddButtons', JSON.stringify(_allAddButtons));
}

// Initialize data
export function initializeData() {
  // localStorage.clear();
  loadFromLocalStorage();
  console.log('allNotesLength:', _allNotes.length);
  console.log('allTodosLength', _allTodos.length);
  console.log('allProjectLength', _allProjects.length);

  // If no data exists in localStorage, initialize with default data
  if (_allNotes.length == 0 || _allTodos.length == 0 || _allProjects == 0) {
    localStorage.clear();

    // Create Todos
    const todo1 = new ToDo("shopping list 1", "1 egg", new Date("2024-09-30"), "low");
    const todo2 = new ToDo("shopping list 2", "description2", new Date("2024-10-07"), "medium");
    const todo3 = new ToDo("shopping list 3", "description3", new Date("2024-10-09"), "high");
    const todo4 = new ToDo("shopping list 4", "description4", new Date("2024-11-20"), "low");

    _allTodos.push(todo1, todo2, todo3, todo4);

    // Create projects
    const project1 = new Project("Gym");
    const project2 = new Project("Cook");
    const project3 = new Project("Empty Project");

    project1.addTodo(new ToDo("gym", "go-to-gym", new Date("2024-09-30"), "low"));
    project1.addTodo(new ToDo("biking", "bike with Sam", new Date("2024-10-02"), "medium"));
    project2.addTodo(new ToDo("cook", "cook-chicken", new Date("2024-09-30"), "high"));


    _allProjects.push(project1, project2, project3);

    // // Create notes
    const note1 = new Note("title", "you can edit title and details in place.");
    const note2 = new Note("books", "go get some books");
    const note3 = new Note("shopping list", "steak\ncheese\ntomatos\nsauce");
    const note5 = new Note("example note", "example\nnote\nwith\nlots\nof\nlines");
    const note8 = new Note("books", "go get some more books");

    _allNotes.push(note1, note2, note3, note5, note8);

    // Save initial data to localStorage 
    saveToLocalStorage(); 
  }
}



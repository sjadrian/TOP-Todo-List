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

export let allAddButtons = [];


export const allButtons = {
  get() {
    return _allButtons;
  },
  set(newButtons) {
    _allButtons = newButtons;
  },
  add(button) {
    _allButtons.push(button);
  },
  remove(buttonToRemove) {
    _allButtons = _allButtons.filter(button => button !== buttonToRemove);
  }
};

// Getter and Setter for allTodos
export const allTodos = {
  get() {
    return _allTodos;
  },
  set(newTodos) {
    _allTodos = newTodos;
  },
  add(todo) {
    _allTodos.push(todo);
  },
  remove(todoToRemove) {
    _allTodos = _allTodos.filter(todo => todo !== todoToRemove);
  }
};

// Getter and Setter for allProjects
export const allProjects = {
  get() {
    return _allProjects;
  },
  set(newProjects) {
    _allProjects = newProjects;
  },
  add(project) {
    _allProjects.push(project);
  }
};

// Getter and Setter for allNotes
export const allNotes = {
  get() {
    return _allNotes;
  },
  set(newNotes) {
    _allNotes = newNotes;
  },
  add(note) {
    _allNotes.unshift(note);
  }
};

// Initialize data
export function initializeData() {
    // Create initial todos
    const todo1 = new ToDo("shopping list 1", "1 egg", new Date("2024-09-30"), "low");
    const todo2 = new ToDo("shopping list 2", "description2", new Date("2024-10-07"), "medium");
    const todo3 = new ToDo("shopping list 3", "description3", new Date("2024-10-09"), "high");
    const todo4 = new ToDo("shopping list 4", "description4", new Date("2024-11-20"), "low");

    allTodos.add(todo1);
    allTodos.add(todo2);
    allTodos.add(todo3);
    allTodos.add(todo4);

    // Create projects
    const project1 = new Project("Gym");
    const project2 = new Project("Cook");
    const project3 = new Project("Empty Project");

    project1.addTodo(new ToDo("gym", "go-to-gym", new Date("2024-09-30"), "low"));
    project1.addTodo(new ToDo("biking", "bike with Sam", new Date("2024-10-02"), "medium"));
    project2.addTodo(new ToDo("cook", "cook-chicken", new Date("2024-09-30"), "high"));

    allProjects.add(project1);
    allProjects.add(project2);
    allProjects.add(project3);

    // Create notes
    const note1 = new Note("title", "you can edit title and details in place.");
    const note2 = new Note("books", "go get some books");
    const note3 = new Note("shopping list", "steak\ncheese\ntomatos\nsauce");
    const note5 = new Note("example note", "example\nnote\nwith\nlots\nof\nlines");
    const note8 = new Note("books", "go get some more books");

    allNotes.add(note1);
    allNotes.add(note2);
    allNotes.add(note3);
    allNotes.add(note5);
    allNotes.add(note8);

    allButtons.add(homeButton);
    allButtons.add(todayButton);
    allButtons.add(weekButton);
    allButtons.add(noteButton);

    allAddButtons.push(todoAdd);
    allAddButtons.push(projectAdd);
    allAddButtons.push(projectTodoAdd);
    allAddButtons.push(noteAdd);
}

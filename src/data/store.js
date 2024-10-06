// /src/data/store.js
import ToDo from '../classes/ToDo.js';
import Project from '../classes/Project.js';
import Note from '../classes/Note.js';

export let allTodos = [];
export let allProjects = [];
export let allNotes = [];

// Initialize data
export function initializeData() {
    // Create initial todos
    const todo1 = new ToDo("shopping list 1", "1 egg", new Date("2024-09-30"), "low");
    const todo2 = new ToDo("shopping list 2", "description2", new Date("2024-10-07"), "medium");
    const todo3 = new ToDo("shopping list 3", "description3", new Date("2024-10-09"), "high");
    const todo4 = new ToDo("shopping list 4", "description4", new Date("2024-11-20"), "low");

    allTodos.push(todo1, todo2, todo3, todo4);

    // Create projects
    const project1 = new Project("Gym");
    const project2 = new Project("Cook");
    const project3 = new Project("Empty Project");

    project1.addTodo(new ToDo("gym", "go-to-gym", new Date("2024-09-30"), "low"));
    project1.addTodo(new ToDo("biking", "bike with Sam", new Date("2024-10-02"), "medium"));

    project2.addTodo(new ToDo("cook", "cook-chicken", new Date("2024-09-30"), "high"));

    allProjects.push(project1, project2, project3);

    const note1 = new Note("title", "you can edit title and details in place.");
    const note2 = new Note("books", "go get some books");
    const note3 = new Note("shopping list", "steak\ncheese\ntomatos\nsauce");
    const note5 = new Note("example note", "example\nnote\nwith\nlots\nof\nlines");
    const note8 = new Note("books", "go get some more books");
 
    allNotes.push(note1, note2, note3,  note5, note8);
}

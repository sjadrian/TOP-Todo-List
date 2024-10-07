// /src/classes/Project.js

import ToDo from "./ToDo";

export default class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
        this.id = Date.now() + Math.random();
    }

    static fromJSON(json) {
        const project = new Project(json.name);
        project.id = json.id;
        // project.todos = json.todos;

        // Convert each todo in the JSON data into a ToDo instance
        project.todos = json.todos.map(todoData => ToDo.fromJSON(todoData));

        return project;
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    // static fromJSON(json) {
    //     const todo = new ToDo(json.title, json.description, json.date, json.priority, json.completed);
    //     todo.id = json.id;
    //     todo.completed = json.completed;
    //     return todo;
    // }
}


// export default class Project {
//     constructor(name) {
//         this._name = name;
//         this._todos = [];
//     }

//     addTodo(todo) {
//         this._todos.push(todo);
//     }

//     removeToDo(todoToRemove) {
//         this._todos = this._todos.filter(todo => todo !== todoToRemove);
//     }

//     set name(newName) {
//         this._name = newName;
//     }

//     get name() {
//         return this._name;
//     }

//     set todos(newTodos) {
//         this._todos = newTodos;
//     }

//     get todos() {
//         return this._todos;
//     }

//     length() {
//         return this._todos.length;
//     }
// }

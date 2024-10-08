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
        // Convert each todo in the JSON data into a ToDo instance
        project.todos = json.todos.map(todoData => ToDo.fromJSON(todoData));

        return project;
    }

    addTodo(todo) {
        this.todos.push(todo);
    }
}

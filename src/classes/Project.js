// /src/classes/Project.js
export default class Project {
    constructor(name) {
        this._name = name;
        this._todos = [];
    }

    addTodo(todo) {
        this._todos.push(todo);
    }

    removeToDo(todoToRemove) {
        this._todos = this._todos.filter(todo => todo !== todoToRemove);
    }

    set name(newName) {
        this._name = newName;
    }

    get name() {
        return this._name;
    }

    set todos(newTodos) {
        this._todos = newTodos;
    }

    get todos() {
        return this._todos;
    }

    length() {
        return this._todos.length;
    }
}
